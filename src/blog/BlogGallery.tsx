import React from 'react';

import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return `${[
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join('/')} ${[
    padTo2Digits(date.getHours()),
    padTo2Digits(date.getMinutes()),
    padTo2Digits(date.getSeconds()),
  ].join(':')}`;
}

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a>
              <h2
                className="text-3xl font-bold font-tiny"
                style={{ color: 'white', fontSize: 42, lineHeight: 0.9 }}
              >
                {elt.title}
              </h2>
            </a>
          </Link>

          <div
            className="text-right text-3xl font-bold font-tiny"
            style={{ color: 'white', fontSize: 38, lineHeight: 0.9 }}
          >
            {/* {format(new Date(elt.date), 'LLL d, yyyy')} */}
            {formatDate(new Date(elt.date))}
          </div>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
