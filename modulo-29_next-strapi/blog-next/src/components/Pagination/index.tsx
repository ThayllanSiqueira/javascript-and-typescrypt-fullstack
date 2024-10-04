import { PaginationData } from '@/domain/posts/pagination';
import { Container, PreviousLink, NextLink } from './styled';
import Link from 'next/link';

export type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage,
  previousPage,
  numberOfPosts,
  postsPerPage,
  category,
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  console.log('numberOfPosts', numberOfPosts);
  console.log(nextPage * postsPerPage);
  console.log(postsPerPage + numberOfPosts);
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href="/post/page/[...param]">
            Previous
          </Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/post/page/[...param]">
            Next
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
