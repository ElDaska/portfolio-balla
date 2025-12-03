// src/components/ContactSection.tsx
import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contact via portfolio");
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    window.location.href = `mailto:diop.ehb@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mt-10 md:mt-14 mb-6 md:mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Colonne info */}
        <div className="text-sm md:text-base text-gray-200 space-y-3">
          <p>
            Vous souhaitez échanger sur un besoin en{" "}
            <span className="font-medium">FP&amp;A, contrôle de gestion,
            automatisation ou data</span> ? Que ce soit pour un poste, une
            mission freelance ou un projet spécifique, je serai ravi d’en
            discuter.
          </p>

          <div className="space-y-1 pt-2">
            <p>
              <span className="font-semibold text-white">Email :</span>{" "}
              <a
                href="mailto:diop.ehb@gmail.com"
                className="text-blue-400 hover:text-blue-300"
              >
                diop.ehb@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">LinkedIn :</span>{" "}
              <a
                href="https://www.linkedin.com/in/elhadjiballadiop"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                /elhadjiballadiop
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Basé à :</span>{" "}
              Fès, Maroc (ouvert au remote international)
            </p>
          </div>

          <p className="text-xs text-gray-400 pt-2">
            Réponse en général sous 24–48h. Vous pouvez également me contacter
            directement via LinkedIn.
          </p>
        </div>

        {/* Colonne formulaire */}
        <form
          onSubmit={handleSubmit}
          className="p-4 md:p-5 rounded-xl bg-white/5 border border-white/10 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Nom / Société
            </label>
            <input
              id="name"
              type="text"
              className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-sm outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-sm outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-sm outline-none focus:border-blue-500 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold text-sm text-white transition"
          >
            Envoyer le message
          </button>

          <p className="text-[11px] text-gray-400">
            Le formulaire ouvrira votre client mail avec un message pré-rempli.
            Plus tard, tu pourras le connecter à une API ou un backend (Nest,
            FastAPI, etc.).
          </p>
        </form>
      </div>
    </section>
  );
}
