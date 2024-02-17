// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="maincontainer">
      <div className="subcontainer">
        <h1 className="mainheading">FAQs</h1>
        <ul className="lists">
          {faqsList.map(each => (
            <FaqItem Item={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
