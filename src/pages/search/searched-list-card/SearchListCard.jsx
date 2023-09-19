import { Card, Typography } from 'antd';

const {Title,Text} = Typography;

const SearchListCard = ({product}) => {
    return (
        <>
         <Card
                type="inner"
                // title={product.title}
                // extra={<a href="#">More</a>}
              >
                <div style={{display:"flex",gap:"1rem"}}>
                    <img src={product.img} style={{width:"10rem",aspectRatio:"1/1.2"}}/>
                    <div style={{flex:"1 1"}}>
                        <Title level={3}>{product.title?.toUpperCase()} </Title>
                        <Title level={5}>{product.caption?.toUpperCase()} </Title>
                        <Text>{product.description}</Text>
                        <Title level={2} style={{marginTop:"1rem!important;"}}>${product.price} </Title>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default SearchListCard;