import { medium, tealfeed } from '../assets';

export const Publications = () => {
    return (
        <div className="my-web__publications">
            <span>My publications</span>
            <div className="my-web__publications__wrapper">
                <div className="my-web__publications__img">
                    <img alt={'Medium social'} src={medium} onClick={() => window.open("https://medium.com/@bilosantonela1996", '_blank')} />
                </div>
                <div className="my-web__publications__img">
                    <img alt={'Tealfeed social'} src={tealfeed} onClick={() => window.open("https://tealfeed.com/nela1806", '_blank')} />
                </div>
            </div>
        </div>
    );
}

export default Publications;