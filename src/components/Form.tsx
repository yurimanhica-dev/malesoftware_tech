"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, phone: onlyNumbers });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: formData.subject || "Contacto Geral",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Mensagem enviada com sucesso! Entraremos em contacto em breve.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          subject: "",
        });

        setTimeout(() => setSubmitStatus({ type: null, message: "" }), 10000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Erro ao enviar mensagem. Tente novamente.",
        });

        setTimeout(() => setSubmitStatus({ type: null, message: "" }), 10000);
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: `Erro de conexão. Verifique sua internet e tente novamente. "${error}"`,
      });

      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Verificar se o formulário é válido
  const isFormValid =
    formData.name && formData.email && formData.phone && formData.subject;

  return (
    <div className="max-w-4xl mx-auto md:p-10 p-4">
      {/* Mensagem de status */}
      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 text-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome completo"
              className="w-full px-4 py-3 border-b border-accent/40 focus:border-accent outline-none bg-transparent"
              disabled={isSubmitting}
            />
            <span className="text-accent">*</span>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 border-b border-accent/40 focus:border-accent outline-none bg-transparent"
              disabled={isSubmitting}
            />
            <span className="text-accent">*</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="Telefone"
            className="w-full px-4 py-3 border-b border-accent/40 focus:border-accent outline-none bg-transparent"
            disabled={isSubmitting}
          />
          <span className="text-accent">*</span>
        </div>
        <div className="flex items-center gap-2">
          <Select
            value={formData.subject}
            onValueChange={handleSelectChange}
            disabled={isSubmitting}
          >
            <SelectTrigger className="w-full px-4 py-3 border-b border-accent/40 focus:border-accent outline-none bg-transparent text-foreground">
              <SelectValue placeholder="Assunto" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Suporte Técnico">Suporte Técnico</SelectItem>
              <SelectItem value="Desenvolvimento de Software">
                Desenvolvimento de Software
              </SelectItem>
              <SelectItem value="Consultoria em TI">
                Consultoria em TI
              </SelectItem>
              <SelectItem value="Proposta Comercial">
                Proposta Comercial
              </SelectItem>
              <SelectItem value="Parcerias Tecnológicas">
                Parcerias Tecnológicas
              </SelectItem>
              <SelectItem value="Outro">Outro</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-accent">*</span>
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            placeholder="Mensagem"
            rows={4}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b border-accent/40 focus:border-accent outline-none bg-transparent"
            disabled={isSubmitting}
          ></textarea>
          <p className="text-md mt-1 text-accent/70">
            <span className="text-accent">*</span> Campos Obrigatórios
          </p>
        </div>
        {/* Botão*/}
        <motion.button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          whileHover={{
            scale: isSubmitting || !isFormValid ? 1 : 1.05,
            boxShadow:
              isSubmitting || !isFormValid
                ? "0 0 0 transparent"
                : "0px 0px 20px rgba(118,181,197,0.6), 0px 0px 40px rgba(14,105,149,0.4)",
          }}
          whileTap={{ scale: isSubmitting || !isFormValid ? 1 : 0.97 }}
          className={`relative w-fit px-10 flex items-center justify-center gap-2 py-3 font-semibold mt-10 uppercase rounded-xl transition-all duration-300 overflow-hidden group mx-auto
    ${
      isSubmitting || !isFormValid
        ? "cursor-not-allowed text-gray-400 border border-gray-500 bg-gray-800/40"
        : "cursor-pointer text-white bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] shadow-[0_0_15px_rgba(118,181,197,0.4)]"
    }
  `}
        >
          {/* Glow Overlay animado */}
          {!isSubmitting && isFormValid && (
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-30 blur-2xl animate-pulse"></span>
          )}

          {/* Texto */}
          <span className="relative z-10 tracking-wider drop-shadow-sm">
            <h1>{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</h1>
          </span>
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
