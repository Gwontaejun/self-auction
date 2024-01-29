import React from 'react';

interface PropType {
  posts: string;
}

const test = (props: PropType) => {
  return <div>cxzcxzc{props.posts}</div>;
};

export async function getStaticProps() {
  const posts = '2';

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default test;
