import react, { useState } from 'react';
import classNames from 'classnames';

import { Question } from '../enums';
import { triangle } from '../assets/index.jsx';

export const FAQ = () => {

  const [questionNumber, setQuestionNumber] = useState({});

  return (
    <div className="my-web__faq__wrapper">
      <div className="my-web__faq__title">FAQ</div>
      <div className="my-web__faq__list">

        <ul>
          <li role="button" className={getClassName(Question.FIRST)} onClick={() => onFAQClick(Question.FIRST)}>
            <div className="my-web__faq__question">
              <span className="my-web__faq__img">
                <img src={triangle} />
              </span>
              <span className="my-web__faq__copy">{'What I want to learn in the future?'}</span>
            </div>
            {questionNumber === Question.FIRST &&
              <div className="my-web__faq__response">
                <span className="my-web__faq__response__copy">
                  {'I enrolled in a course on AWS Cloud and would like to learn more about cloud architecture in general.'}
                </span>
              </div>
            }
          </li>

          <li role="button" className={getClassName(Question.SECOND)} onClick={() => onFAQClick(Question.SECOND)}>
            <div className="my-web__faq__question">
              <span className="my-web__faq__img">
                <img src={triangle} />
              </span>
              <span className="my-web__faq__copy">{'Which soft skills do I want to develop more?'}</span>
            </div>
            {questionNumber === Question.SECOND &&
              <div className="my-web__faq__response">
                <span className="my-web__faq__response__copy">
                  {'For now, I will say presentation skills.'}
                </span>
              </div>
            }
          </li>

          <li role="button" className={getClassName(Question.THIRD)} onClick={() => onFAQClick(Question.THIRD)}>
            <div className="my-web__faq__question">
              <span className="my-web__faq__img">
                <img src={triangle} />
              </span>
              <span className="my-web__faq__copy">{'Something about you that is not in your resume?'}</span>
            </div>
            {questionNumber === Question.THIRD &&
              <div className="my-web__faq__response">
                <div className="my-web__faq__response__copy">
                  {'I like to read modern psychology and IT magazines. One of my favorites is a'} <a href='https://www.smashingmagazine.com/'>Smashing Magazine</a> {'by Vitaly Friedman.'}
                </div>
              </div>
            }
          </li>

        </ul>
      </div>
    </div>
  );

  function getClassName(faqNumber: Question) {
    return classNames('my-web__faq__list-item', {
      'my-web__faq__list-item--selected': questionNumber === faqNumber,
    });
  }

  function onFAQClick(selectedQuestionNumber: Question) {
    const newQNumber = selectedQuestionNumber === questionNumber ? {} : selectedQuestionNumber;

    setQuestionNumber(newQNumber);
  }
};

export default FAQ;
