import contactData from "../../data/contactData.json"

export default function ContactReachUsPanel() {
  const { splitPanels } = contactData

  return (
    <div className="contact-page__side contact-page__side--left">
      <div className="contact-page__left-content">
        <div className="contact-page__panel-title">
          <h2>{splitPanels.reachTitle}</h2>
        </div>
        <div className="contact-page__mini-form-panel">
          <form onSubmit={(event) => event.preventDefault()} className="contact-page__mini-form-panel-form">
            <div className="contact-page__mini-form-header">
              <p className="contact-page__mini-form-intro">{splitPanels.intro}</p>
            </div>
            <div className="contact-page__mini-form-fields">
              {splitPanels.fields.map((field) => (
                <label key={field.name} className="contact-page__mini-field">
                  <span>{field.label}</span>
                  <input type={field.type} name={field.name} placeholder={field.placeholder} />
                </label>
              ))}
            </div>
            <button type="submit" className="btn btn-primary contact-page__mini-submit">
              {splitPanels.submitButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
