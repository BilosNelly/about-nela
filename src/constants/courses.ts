import {
    ajax,
    hooks,
    javascript,
    jsadvanced,
    jsbasics,
    webpack,
  } from '../assets';
import { ICourse } from '../typings';

export const udemyCourses: ICourse[] = [
    {
      img: hooks,
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-45d6eb11-b38f-4bb3-b02b-97a9b4bdb3dd.pdf"
    },
    {
      img: webpack,
      link: "https://www.udemy.com/certificate/UC-9B6AY32B/"
    },
    {
      img: javascript,
      link: "https://www.udemy.com/certificate/UC-8207d41c-e3c0-4c0e-9b80-418aabf29d88/"
    },
    {
      img: ajax,
      link: "https://www.udemy.com/certificate/UC-IU9VKT17/"
    },
  ]
  
export const hackerRankCourses: ICourse[] = [
    {
      img: jsbasics,
      link: "https://www.hackerrank.com/certificates/75673754bc21"
    },
    {
      img: jsadvanced,
      link: "https://www.hackerrank.com/certificates/iframe/e0c20aed3909"
    }
  ]