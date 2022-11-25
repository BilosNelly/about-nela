export const FAQ = (props) => {
  return (
    <div className="my-web__faq__wrapper">
      <div className="my-web__faq__title">FAQ</div>
      <div className="my-web__faq__list">
        <ul>
          {props.questions.map((item) => {
            return (
              <li key={item.id} onClick={() => props.onClick()}>
                {item.question}
                {props.showResponse && (
                  <div className="my-web__faq__response">
                    <span className="my-web__faq__response__copy">
                      {item.response}
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
