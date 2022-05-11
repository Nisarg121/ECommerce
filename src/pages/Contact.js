import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="breadcrumbs">
        <div className="breadcrumbs__center center">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="index.html">Home Page</a></li>
            <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="category.html">Categories</a></li>
            <li className="breadcrumbs__item">Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="contacts section">
        <div className="contacts__details">
          <div className="contacts__center center">
            <div className="contacts__stage stage">- Ask Questions</div>
            <h2 className="contacts__title title">We are always here to <br />help you</h2>
            <div className="contacts__list">
              <div className="contacts__item">
                <div className="contacts__category">Customer Services</div>
                <div className="contacts__text">Please send us an email at <a className="contacts__link" href="mailto:customercare@hygge.com">customercare@hygge.com</a></div>
              </div>
              <div className="contacts__item">
                <div className="contacts__category">Public Relations</div>
                <div className="contacts__text">You can contact our media team by sending them an email at <a className="contacts__link" href="mailto:media@hygge.com">media@hygge.com</a></div>
              </div>
              <div className="contacts__item">
                <div className="contacts__category">Large Orders</div>
                <div className="contacts__text">If you are thinking of making a very large order, plese feel free to contact us at <a className="contacts__link" href="mailto:sales@hygge.com">sales@hygge.com</a> and we will give you a special discount</div>
              </div>
              <div className="contacts__item">
                <div className="contacts__category">Other Enquiries</div>
                <div className="contacts__text">For all of your other questions, please send us an email at <a className="contacts__link" href="mailto:general@hygge.com">general@hygge.com</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="contacts__container">
          <div className="contacts__center center">
            <div className="contacts__row">
              <div className="contacts__wrap">
                <div className="contacts__stage stage">- Reach Out to Us</div>
                <h2 className="contacts__title title">Please fill out the contact form</h2>
              </div>
              <form className="contacts__form">
                <div className="contacts__field field">
                  <div className="field__label">Full Name</div>
                  <div className="field__wrap"><input className="field__input" type="text" name="name" /></div>
                </div>
                <div className="contacts__field field">
                  <div className="field__label">Email Address</div>
                  <div className="field__wrap"><input className="field__input" type="text" name="address" /></div>
                </div>
                <div className="contacts__field field">
                  <div className="field__label">Subject</div>
                  <div className="field__wrap"><select className="field__select wide" name="subject">
                      <option>Choose Subject</option>
                      <option>Subject 1</option>
                      <option>Subject 2</option>
                    </select></div>
                </div>
                <div className="contacts__field field field_textarea">
                  <div className="field__label">Message</div>
                  <div className="field__wrap"><textarea className="field__textarea" name="message"></textarea></div>
                </div><button className="contacts__btn btn btn_green" type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter section">
        <div className="newsletter__center center">
          <div className="newsletter__container">
            <div className="newsletter__stage stage">- Our Newsletter</div>
            <h2 className="newsletter__title title title_mb-md">Sign Up to our Newsletter</h2>
            <form className="newsletter__form">
              <div className="newsletter__field field">
                <div className="field__wrap"><input className="field__input" type="text" placeholder="Your Email" /></div>
              </div>
              <div className="newsletter__btns"><button className="newsletter__btn btn btn_green btn_wide" type="submit">Sign Up</button></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact