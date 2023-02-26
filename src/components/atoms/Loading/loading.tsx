import {LoadingProps} from './loading.props';
import {ActivityIndicator, Container} from './loading.styles';

export const Loading = (props: LoadingProps) => {
  return (
    <Container>
      <ActivityIndicator size="large" {...props} />
    </Container>
  );
};
