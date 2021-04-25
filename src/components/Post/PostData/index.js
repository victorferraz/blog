import { ProfilePic } from '../../Shared';
import { PostHeadDetailsStyle, PostHeadDetailsWrapper, AuthorStyle } from './ui';

export default ({ readTime, date}) => (
  <PostHeadDetailsWrapper>
    <ProfilePic src="/victor-ferraz.jpg" />
    <PostHeadDetailsStyle>
      <AuthorStyle> Victor Ferraz </AuthorStyle> <br /> {getDate(date)} - {readTime} min leitura
    </PostHeadDetailsStyle>
  </PostHeadDetailsWrapper>
);

function getDate(dateParam) {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril',  'Maio','Junho', 'Julho', 'Agosto','Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const date = new Date(dateParam)
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
