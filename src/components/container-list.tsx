import { IContainerItem } from '../typings';
import Container from './container';

interface Props {
    containerItems: IContainerItem[];
}

export const ContainerList = (props: Props) => {
    return (
        <>
            {props.containerItems.map((item: IContainerItem) => {
                return (
                    <Container
                        title={item.title}
                        img={item.img}
                        text={item.text}
                    />
                )
            })}
        </>
    );
}

export default ContainerList;