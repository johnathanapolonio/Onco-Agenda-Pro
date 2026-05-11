import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout";
import { useGetAvailableSlots, useCreateAppointment, getGetAvailableSlotsQueryKey, useGetAppointment, getGetAppointmentQueryKey } from "@workspace/api-client-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, Calendar as CalendarIcon, Clock, User, Phone, Mail } from "lucide-react";

const formSchema = z.object({
  patientName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  patientEmail: z.string().email("Email inválido"),
  patientPhone: z.string().min(10, "Telefone inválido"),
  reason: z.string().min(5, "Informe o motivo da consulta"),
  notes: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

export default function Agendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: DateTime, 2: Form, 3: Success
  const [createdAppointmentId, setCreatedAppointmentId] = useState<number | null>(null);

  const dateStr = date ? format(date, "yyyy-MM-dd") : "";

  const { data: slots, isLoading: isSlotsLoading } = useGetAvailableSlots(
    { date: dateStr },
    { query: { enabled: !!dateStr, queryKey: getGetAvailableSlotsQueryKey({ date: dateStr }) } }
  );

  const createAppointment = useCreateAppointment();

  const { data: appointmentDetails } = useGetAppointment(
    createdAppointmentId || 0,
    { query: { enabled: !!createdAppointmentId, queryKey: getGetAppointmentQueryKey(createdAppointmentId || 0) } }
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: "",
      patientEmail: "",
      patientPhone: "",
      reason: "",
      notes: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    if (!dateStr || !selectedTime) return;

    createAppointment.mutate({
      data: {
        ...data,
        date: dateStr,
        time: selectedTime
      }
    }, {
      onSuccess: (res) => {
        setCreatedAppointmentId(res.id);
        setStep(3);
      }
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Agendar Consulta | Cirurgião Oncológico Campo Largo</title>
        <meta name="description" content="Agende sua consulta com nosso cirurgião oncológico em Campo Largo. Escolha o melhor horário para o seu atendimento." />
      </Helmet>

      <div className="container max-w-4xl px-4 py-12 md:py-20 mx-auto min-h-[80vh]">
        <div className="mb-8 text-center space-y-2">
          <h1 className="font-serif text-3xl md:text-4xl font-bold">Agende sua Consulta</h1>
          <p className="text-muted-foreground text-lg">Selecione uma data e preencha seus dados para solicitar o agendamento.</p>
        </div>

        {step === 1 && (
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Data da Consulta</CardTitle>
                <CardDescription>Selecione o dia desejado</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  locale={ptBR}
                  disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                  className="rounded-md border shadow"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Horários Disponíveis</CardTitle>
                <CardDescription>
                  {date ? format(date, "d 'de' MMMM", { locale: ptBR }) : "Selecione uma data"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!date ? (
                  <div className="text-center p-8 text-muted-foreground">
                    Selecione uma data no calendário para ver os horários.
                  </div>
                ) : isSlotsLoading ? (
                  <div className="grid grid-cols-2 gap-2">
                    {[1,2,3,4,5,6].map(i => <Skeleton key={i} className="h-10 w-full" />)}
                  </div>
                ) : slots && slots.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2">
                    {slots.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={selectedTime === slot.time ? "default" : "outline"}
                        className={`w-full ${!slot.available && "opacity-50 cursor-not-allowed"}`}
                        disabled={!slot.available}
                        onClick={() => setSelectedTime(slot.time)}
                      >
                        {slot.time}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 text-muted-foreground">
                    Nenhum horário disponível para esta data.
                  </div>
                )}

                {selectedTime && (
                  <div className="mt-8">
                    <Button className="w-full" onClick={() => setStep(2)}>
                      Continuar
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {step === 2 && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 bg-muted/50 p-3 rounded-lg w-fit">
                <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4"/> {date && format(date, "dd/MM/yyyy")}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {selectedTime}</span>
                <Button variant="link" size="sm" onClick={() => setStep(1)} className="h-auto p-0 ml-2">Alterar</Button>
              </div>
              <CardTitle className="font-serif text-2xl">Dados do Paciente</CardTitle>
              <CardDescription>Preencha os dados para confirmar a solicitação</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="patientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="patientPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone / WhatsApp</FormLabel>
                          <FormControl>
                            <Input placeholder="(41) 90000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="patientEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Motivo da Consulta</FormLabel>
                        <FormControl>
                          <Input placeholder="Primeira avaliação, acompanhamento, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Observações Adicionais (opcional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Alguma informação importante que devemos saber antecipadamente?" className="resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} disabled={createAppointment.isPending}>
                      Voltar
                    </Button>
                    <Button type="submit" className="flex-1" disabled={createAppointment.isPending}>
                      {createAppointment.isPending ? "Confirmando..." : "Confirmar Agendamento"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="max-w-xl mx-auto border-primary/20 bg-primary/5">
            <CardContent className="pt-12 pb-12 space-y-6">
              <div className="flex justify-center text-center">
                <CheckCircle2 className="w-20 h-20 text-primary" />
              </div>
              <div className="text-center space-y-2">
                <h2 className="font-serif text-3xl font-bold text-primary">Solicitação Recebida</h2>
                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                  Sua solicitação de agendamento foi recebida com sucesso. Nossa equipe entrará em contato em breve.
                </p>
              </div>
              
              {appointmentDetails ? (
                <div className="bg-background rounded-xl p-6 border border-border mt-8 space-y-4 shadow-sm">
                  <h3 className="font-medium text-foreground border-b pb-2">Detalhes do Agendamento #{appointmentDetails.id}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <p className="text-muted-foreground flex items-center gap-2"><CalendarIcon className="w-4 h-4"/> Data</p>
                      <p className="font-medium">{format(new Date(appointmentDetails.date), "dd/MM/yyyy")}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-muted-foreground flex items-center gap-2"><Clock className="w-4 h-4"/> Horário</p>
                      <p className="font-medium">{appointmentDetails.time}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-muted-foreground flex items-center gap-2"><User className="w-4 h-4"/> Paciente</p>
                      <p className="font-medium">{appointmentDetails.patientName}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-muted-foreground flex items-center gap-2"><Phone className="w-4 h-4"/> Telefone</p>
                      <p className="font-medium">{appointmentDetails.patientPhone}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center pt-8">
                  <Skeleton className="w-full h-32" />
                </div>
              )}

              <div className="pt-6 text-center">
                <Button data-testid="button-home-return" onClick={() => window.location.href = "/"}>Voltar para a Página Inicial</Button>
              </div>
            </CardContent>
          </Card>
        )}

      </div>
    </Layout>
  );
}