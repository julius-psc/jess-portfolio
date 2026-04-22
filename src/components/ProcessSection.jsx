const steps = [
  {
    num: '01',
    title: 'Reach Out',
    body: "Tell me a little about your vision — who you are, what you're hoping to capture, and when you imagine it happening.",
  },
  {
    num: '02',
    title: 'Connect',
    body: "We'll have a relaxed conversation over email or video. No questionnaires — just a real conversation to understand what you need.",
  },
  {
    num: '03',
    title: 'Create',
    body: 'The session itself is unhurried, warm, and entirely natural. I direct only with light — the rest is you, real and beautiful.',
  },
  {
    num: '04',
    title: 'Receive',
    body: 'Your images are delivered in a private online gallery within two weeks. Curated, edited, and yours to cherish forever.',
  },
]

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="process-header">
        <span className="label" style={{ display: 'block', marginBottom: '20px' }}>
          How It Works
        </span>
        <h2 className="reveal">
          The <em>Experience</em>
        </h2>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div className="process-step reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="process-num">{step.num}</span>
            <h4>{step.title}</h4>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
