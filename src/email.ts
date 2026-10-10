import emailjs from "@emailjs/browser"

const SERVICE = "service_gtw6y7f"
const TEMPLATE = "template_yxby3fo"
const PUBLIC_KEY = "3lB_RrpJl0jbKDyd4"

export function sendContactForm(form: HTMLFormElement) {
  return emailjs.sendForm(SERVICE, TEMPLATE, form, { publicKey: PUBLIC_KEY })
}

export function sendHeroEmail(email: string, message: string) {
  return emailjs.send(
    SERVICE,
    TEMPLATE,
    {
      from_name: "Portfolio",
      from_email: email,
      message,
    },
    { publicKey: PUBLIC_KEY },
  )
}
