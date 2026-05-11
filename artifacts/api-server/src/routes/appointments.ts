import { Router } from "express";
import { db, appointmentsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { GetAvailableSlotsQueryParams, CreateAppointmentBody } from "@workspace/api-zod";

const router = Router();

const AVAILABLE_TIMES = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00",
];

router.get("/slots", async (req, res) => {
  const parsed = GetAvailableSlotsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: "Data inválida. Use o formato YYYY-MM-DD." });
    return;
  }

  const { date } = parsed.data;

  const existing = await db
    .select({ time: appointmentsTable.time })
    .from(appointmentsTable)
    .where(eq(appointmentsTable.date, date));

  const bookedTimes = new Set(existing.map((a) => a.time));

  const slots = AVAILABLE_TIMES.map((time) => ({
    time,
    available: !bookedTimes.has(time),
  }));

  res.json(slots);
});

router.post("/", async (req, res) => {
  const parsed = CreateAppointmentBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Dados inválidos. Verifique os campos e tente novamente." });
    return;
  }

  const { patientName, patientEmail, patientPhone, date, time, reason, notes } = parsed.data;

  const booked = await db
    .select({ time: appointmentsTable.time })
    .from(appointmentsTable)
    .where(eq(appointmentsTable.date, date));

  const timeConflict = booked.some((a) => a.time === time);

  if (timeConflict) {
    res.status(400).json({ error: "Este horário não está mais disponível. Por favor, escolha outro horário." });
    return;
  }

  const [appointment] = await db
    .insert(appointmentsTable)
    .values({
      patientName,
      patientEmail,
      patientPhone,
      date,
      time,
      reason,
      notes: notes ?? null,
      status: "pending",
    })
    .returning();

  res.status(201).json(appointment);
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "ID inválido." });
    return;
  }

  const [appointment] = await db
    .select()
    .from(appointmentsTable)
    .where(eq(appointmentsTable.id, id));

  if (!appointment) {
    res.status(404).json({ error: "Consulta não encontrada." });
    return;
  }

  res.json(appointment);
});

export default router;
