import { SessionCardStyled } from './SesssionCard.styled';
import { Image, Card } from 'antd';
import { format } from 'date-fns';

interface SessionCardProps {
  image: string;
  title: string;
  startDate: Date;
  endDate: Date;
}

export const SessionCard: React.FC<SessionCardProps> = ({ image, title, startDate, endDate }) => {
  const dateRange = `${startDate ? format(new Date(startDate), 'dd MM yyyy') : 'N/A'} - ${
    endDate ? format(new Date(endDate), 'dd MM yyyy') : 'N/A'
  }`;
  return (
    <SessionCardStyled>
      <Card style={{ width: 240, height: 280, padding: '5px' }} cover={<Image src={image} />}>
        <Card.Meta title={title} description={dateRange} />
      </Card>
    </SessionCardStyled>
  );
};
