export const Container = (props) => {
    return (
        <div className="my-web__container__wrapper">
          <div className="my-web__container">
            <span className="my-web__container__img">
              <img src={props.img} />
            </span>
            <span className="my-web__container__title highlight">{props.title}</span>
            <span className="my-web__container__text">{props.text}</span>
          </div>
        </div>
    );
}

export default Container;