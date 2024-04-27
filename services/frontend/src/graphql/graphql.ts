import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BookAuthorFilters = {
  OR?: InputMaybe<Array<BookAuthorfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookAuthorfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookCreationDateFilters = {
  OR?: InputMaybe<Array<BookCreationDatefiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookCreationDatefiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookDeletionDateFilters = {
  OR?: InputMaybe<Array<BookDeletionDatefiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookDeletionDatefiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookIdFilters = {
  OR?: InputMaybe<Array<BookIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookIsbnFilters = {
  OR?: InputMaybe<Array<BookIsbnfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookIsbnfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookPlotFilters = {
  OR?: InputMaybe<Array<BookPlotfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookPlotfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookTitleFilters = {
  OR?: InputMaybe<Array<BookTitlefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BookTitlefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type BooksFilters = {
  OR?: InputMaybe<Array<BooksFiltersOr>>;
  author?: InputMaybe<BookAuthorFilters>;
  creationDate?: InputMaybe<BookCreationDateFilters>;
  deletionDate?: InputMaybe<BookDeletionDateFilters>;
  id?: InputMaybe<BookIdFilters>;
  isbn?: InputMaybe<BookIsbnFilters>;
  plot?: InputMaybe<BookPlotFilters>;
  title?: InputMaybe<BookTitleFilters>;
};

export type BooksFiltersOr = {
  author?: InputMaybe<BookAuthorFilters>;
  creationDate?: InputMaybe<BookCreationDateFilters>;
  deletionDate?: InputMaybe<BookDeletionDateFilters>;
  id?: InputMaybe<BookIdFilters>;
  isbn?: InputMaybe<BookIsbnFilters>;
  plot?: InputMaybe<BookPlotFilters>;
  title?: InputMaybe<BookTitleFilters>;
};

export type BooksInsertInput = {
  author: Scalars['String']['input'];
  /** Date */
  creationDate?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  deletionDate?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isbn: Scalars['String']['input'];
  plot?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type BooksItem = {
  author: Scalars['String']['output'];
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  /** Date */
  deletionDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isbn: Scalars['String']['output'];
  plot?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type BooksOrderBy = {
  author?: InputMaybe<InnerOrder>;
  creationDate?: InputMaybe<InnerOrder>;
  deletionDate?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  isbn?: InputMaybe<InnerOrder>;
  plot?: InputMaybe<InnerOrder>;
  title?: InputMaybe<InnerOrder>;
};

export type BooksReadingsRelation = {
  bookId?: Maybe<Scalars['Float']['output']>;
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  userId?: Maybe<Scalars['Float']['output']>;
};

export type BooksReadingsRelationFilters = {
  OR?: InputMaybe<Array<BooksReadingsRelationFiltersOr>>;
  bookId?: InputMaybe<ReadingsBookIdFilters>;
  creationDate?: InputMaybe<ReadingsCreationDateFilters>;
  id?: InputMaybe<ReadingsIdFilters>;
  userId?: InputMaybe<ReadingsUserIdFilters>;
};

export type BooksReadingsRelationFiltersOr = {
  bookId?: InputMaybe<ReadingsBookIdFilters>;
  creationDate?: InputMaybe<ReadingsCreationDateFilters>;
  id?: InputMaybe<ReadingsIdFilters>;
  userId?: InputMaybe<ReadingsUserIdFilters>;
};

export type BooksReadingsRelationOrder = {
  bookId?: InputMaybe<InnerOrder>;
  creationDate?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  userId?: InputMaybe<InnerOrder>;
};

export type BooksSelectItem = {
  author: Scalars['String']['output'];
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  /** Date */
  deletionDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isbn: Scalars['String']['output'];
  plot?: Maybe<Scalars['String']['output']>;
  readings: Array<BooksReadingsRelation>;
  title: Scalars['String']['output'];
  usersToBooks: Array<BooksUsersToBooksRelation>;
};


export type BooksSelectItemReadingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BooksReadingsRelationOrder>;
  where?: InputMaybe<BooksReadingsRelationFilters>;
};


export type BooksSelectItemUsersToBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BooksUsersToBooksRelationOrder>;
  where?: InputMaybe<BooksUsersToBooksRelationFilters>;
};

export type BooksUpdateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  creationDate?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  deletionDate?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  plot?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BooksUsersToBooksRelation = {
  bookId?: Maybe<Scalars['Float']['output']>;
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type BooksUsersToBooksRelationFilters = {
  OR?: InputMaybe<Array<BooksUsersToBooksRelationFiltersOr>>;
  bookId?: InputMaybe<UsersToBooksBookIdFilters>;
  creationDate?: InputMaybe<UsersToBooksCreationDateFilters>;
  userId?: InputMaybe<UsersToBooksUserIdFilters>;
};

export type BooksUsersToBooksRelationFiltersOr = {
  bookId?: InputMaybe<UsersToBooksBookIdFilters>;
  creationDate?: InputMaybe<UsersToBooksCreationDateFilters>;
  userId?: InputMaybe<UsersToBooksUserIdFilters>;
};

export type BooksUsersToBooksRelationOrder = {
  bookId?: InputMaybe<InnerOrder>;
  creationDate?: InputMaybe<InnerOrder>;
  userId?: InputMaybe<InnerOrder>;
};

export type InnerOrder = {
  direction: OrderDirection;
  /** Priority of current field */
  priority: Scalars['Int']['input'];
};

export type Mutation = {
  deleteFromBooks: Array<BooksItem>;
  deleteFromReadings: Array<ReadingsItem>;
  deleteFromUsers: Array<UsersItem>;
  deleteFromUsersToBooks: Array<UsersToBooksItem>;
  insertIntoBooks: Array<BooksItem>;
  insertIntoBooksSingle?: Maybe<BooksItem>;
  insertIntoReadings: Array<ReadingsItem>;
  insertIntoReadingsSingle?: Maybe<ReadingsItem>;
  insertIntoUsers: Array<UsersItem>;
  insertIntoUsersSingle?: Maybe<UsersItem>;
  insertIntoUsersToBooks: Array<UsersToBooksItem>;
  insertIntoUsersToBooksSingle?: Maybe<UsersToBooksItem>;
  updateBooks: Array<BooksItem>;
  updateReadings: Array<ReadingsItem>;
  updateUsers: Array<UsersItem>;
  updateUsersToBooks: Array<UsersToBooksItem>;
};


export type MutationDeleteFromBooksArgs = {
  where?: InputMaybe<BooksFilters>;
};


export type MutationDeleteFromReadingsArgs = {
  where?: InputMaybe<ReadingsFilters>;
};


export type MutationDeleteFromUsersArgs = {
  where?: InputMaybe<UsersFilters>;
};


export type MutationDeleteFromUsersToBooksArgs = {
  where?: InputMaybe<UsersToBooksFilters>;
};


export type MutationInsertIntoBooksArgs = {
  values: Array<BooksInsertInput>;
};


export type MutationInsertIntoBooksSingleArgs = {
  values: BooksInsertInput;
};


export type MutationInsertIntoReadingsArgs = {
  values: Array<ReadingsInsertInput>;
};


export type MutationInsertIntoReadingsSingleArgs = {
  values: ReadingsInsertInput;
};


export type MutationInsertIntoUsersArgs = {
  values: Array<UsersInsertInput>;
};


export type MutationInsertIntoUsersSingleArgs = {
  values: UsersInsertInput;
};


export type MutationInsertIntoUsersToBooksArgs = {
  values: Array<UsersToBooksInsertInput>;
};


export type MutationInsertIntoUsersToBooksSingleArgs = {
  values: UsersToBooksInsertInput;
};


export type MutationUpdateBooksArgs = {
  set: BooksUpdateInput;
  where?: InputMaybe<BooksFilters>;
};


export type MutationUpdateReadingsArgs = {
  set: ReadingsUpdateInput;
  where?: InputMaybe<ReadingsFilters>;
};


export type MutationUpdateUsersArgs = {
  set: UsersUpdateInput;
  where?: InputMaybe<UsersFilters>;
};


export type MutationUpdateUsersToBooksArgs = {
  set: UsersToBooksUpdateInput;
  where?: InputMaybe<UsersToBooksFilters>;
};

/** Order by direction */
export enum OrderDirection {
  /** Ascending order */
  Asc = 'asc',
  /** Descending order */
  Desc = 'desc'
}

export type Query = {
  books: Array<BooksSelectItem>;
  booksSingle?: Maybe<BooksSelectItem>;
  readings: Array<ReadingsSelectItem>;
  readingsSingle?: Maybe<ReadingsSelectItem>;
  users: Array<UsersSelectItem>;
  usersSingle?: Maybe<UsersSelectItem>;
  userstobooks: Array<UsersToBooksSelectItem>;
  userstobooksSingle?: Maybe<UsersToBooksSelectItem>;
};


export type QueryBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BooksOrderBy>;
  where?: InputMaybe<BooksFilters>;
};


export type QueryBooksSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BooksOrderBy>;
  where?: InputMaybe<BooksFilters>;
};


export type QueryReadingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadingsOrderBy>;
  where?: InputMaybe<ReadingsFilters>;
};


export type QueryReadingsSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReadingsOrderBy>;
  where?: InputMaybe<ReadingsFilters>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersOrderBy>;
  where?: InputMaybe<UsersFilters>;
};


export type QueryUsersSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersOrderBy>;
  where?: InputMaybe<UsersFilters>;
};


export type QueryUserstobooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersToBooksOrderBy>;
  where?: InputMaybe<UsersToBooksFilters>;
};


export type QueryUserstobooksSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersToBooksOrderBy>;
  where?: InputMaybe<UsersToBooksFilters>;
};

export type ReadingsBookIdFilters = {
  OR?: InputMaybe<Array<ReadingsBookIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ReadingsBookIdfiltersOr = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ReadingsBookRelation = {
  author: Scalars['String']['output'];
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  /** Date */
  deletionDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isbn: Scalars['String']['output'];
  plot?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type ReadingsBookRelationFilters = {
  OR?: InputMaybe<Array<ReadingsBookRelationFiltersOr>>;
  author?: InputMaybe<BookAuthorFilters>;
  creationDate?: InputMaybe<BookCreationDateFilters>;
  deletionDate?: InputMaybe<BookDeletionDateFilters>;
  id?: InputMaybe<BookIdFilters>;
  isbn?: InputMaybe<BookIsbnFilters>;
  plot?: InputMaybe<BookPlotFilters>;
  title?: InputMaybe<BookTitleFilters>;
};

export type ReadingsBookRelationFiltersOr = {
  author?: InputMaybe<BookAuthorFilters>;
  creationDate?: InputMaybe<BookCreationDateFilters>;
  deletionDate?: InputMaybe<BookDeletionDateFilters>;
  id?: InputMaybe<BookIdFilters>;
  isbn?: InputMaybe<BookIsbnFilters>;
  plot?: InputMaybe<BookPlotFilters>;
  title?: InputMaybe<BookTitleFilters>;
};

export type ReadingsCreationDateFilters = {
  OR?: InputMaybe<Array<ReadingsCreationDatefiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ReadingsCreationDatefiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ReadingsFilters = {
  OR?: InputMaybe<Array<ReadingsFiltersOr>>;
  bookId?: InputMaybe<ReadingsBookIdFilters>;
  creationDate?: InputMaybe<ReadingsCreationDateFilters>;
  id?: InputMaybe<ReadingsIdFilters>;
  userId?: InputMaybe<ReadingsUserIdFilters>;
};

export type ReadingsFiltersOr = {
  bookId?: InputMaybe<ReadingsBookIdFilters>;
  creationDate?: InputMaybe<ReadingsCreationDateFilters>;
  id?: InputMaybe<ReadingsIdFilters>;
  userId?: InputMaybe<ReadingsUserIdFilters>;
};

export type ReadingsIdFilters = {
  OR?: InputMaybe<Array<ReadingsIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ReadingsIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ReadingsInsertInput = {
  bookId?: InputMaybe<Scalars['Float']['input']>;
  /** Date */
  creationDate?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Float']['input']>;
};

export type ReadingsItem = {
  bookId?: Maybe<Scalars['Float']['output']>;
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  userId?: Maybe<Scalars['Float']['output']>;
};

export type ReadingsOrderBy = {
  bookId?: InputMaybe<InnerOrder>;
  creationDate?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  userId?: InputMaybe<InnerOrder>;
};

export type ReadingsSelectItem = {
  book?: Maybe<ReadingsBookRelation>;
  bookId?: Maybe<Scalars['Float']['output']>;
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  user?: Maybe<ReadingsUserRelation>;
  userId?: Maybe<Scalars['Float']['output']>;
};


export type ReadingsSelectItemBookArgs = {
  where?: InputMaybe<ReadingsBookRelationFilters>;
};


export type ReadingsSelectItemUserArgs = {
  where?: InputMaybe<ReadingsUserRelationFilters>;
};

export type ReadingsUpdateInput = {
  bookId?: InputMaybe<Scalars['Float']['input']>;
  /** Date */
  creationDate?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Float']['input']>;
};

export type ReadingsUserIdFilters = {
  OR?: InputMaybe<Array<ReadingsUserIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ReadingsUserIdfiltersOr = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type ReadingsUserRelation = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type ReadingsUserRelationFilters = {
  OR?: InputMaybe<Array<ReadingsUserRelationFiltersOr>>;
  email?: InputMaybe<UsersEmailFilters>;
  firstName?: InputMaybe<UsersFirstNameFilters>;
  id?: InputMaybe<UsersIdFilters>;
  lastName?: InputMaybe<UsersLastNameFilters>;
};

export type ReadingsUserRelationFiltersOr = {
  email?: InputMaybe<UsersEmailFilters>;
  firstName?: InputMaybe<UsersFirstNameFilters>;
  id?: InputMaybe<UsersIdFilters>;
  lastName?: InputMaybe<UsersLastNameFilters>;
};

export type UsersEmailFilters = {
  OR?: InputMaybe<Array<UsersEmailfiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersEmailfiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersFilters = {
  OR?: InputMaybe<Array<UsersFiltersOr>>;
  email?: InputMaybe<UsersEmailFilters>;
  firstName?: InputMaybe<UsersFirstNameFilters>;
  id?: InputMaybe<UsersIdFilters>;
  lastName?: InputMaybe<UsersLastNameFilters>;
};

export type UsersFiltersOr = {
  email?: InputMaybe<UsersEmailFilters>;
  firstName?: InputMaybe<UsersFirstNameFilters>;
  id?: InputMaybe<UsersIdFilters>;
  lastName?: InputMaybe<UsersLastNameFilters>;
};

export type UsersFirstNameFilters = {
  OR?: InputMaybe<Array<UsersFirstNamefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersFirstNamefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersIdFilters = {
  OR?: InputMaybe<Array<UsersIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersInsertInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UsersItem = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type UsersLastNameFilters = {
  OR?: InputMaybe<Array<UsersLastNamefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersLastNamefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersOrderBy = {
  email?: InputMaybe<InnerOrder>;
  firstName?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  lastName?: InputMaybe<InnerOrder>;
};

export type UsersReadingsRelation = {
  bookId?: Maybe<Scalars['Float']['output']>;
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  userId?: Maybe<Scalars['Float']['output']>;
};

export type UsersReadingsRelationFilters = {
  OR?: InputMaybe<Array<UsersReadingsRelationFiltersOr>>;
  bookId?: InputMaybe<ReadingsBookIdFilters>;
  creationDate?: InputMaybe<ReadingsCreationDateFilters>;
  id?: InputMaybe<ReadingsIdFilters>;
  userId?: InputMaybe<ReadingsUserIdFilters>;
};

export type UsersReadingsRelationFiltersOr = {
  bookId?: InputMaybe<ReadingsBookIdFilters>;
  creationDate?: InputMaybe<ReadingsCreationDateFilters>;
  id?: InputMaybe<ReadingsIdFilters>;
  userId?: InputMaybe<ReadingsUserIdFilters>;
};

export type UsersReadingsRelationOrder = {
  bookId?: InputMaybe<InnerOrder>;
  creationDate?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  userId?: InputMaybe<InnerOrder>;
};

export type UsersSelectItem = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  readings: Array<UsersReadingsRelation>;
  usersToBooks: Array<UsersUsersToBooksRelation>;
};


export type UsersSelectItemReadingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersReadingsRelationOrder>;
  where?: InputMaybe<UsersReadingsRelationFilters>;
};


export type UsersSelectItemUsersToBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersUsersToBooksRelationOrder>;
  where?: InputMaybe<UsersUsersToBooksRelationFilters>;
};

export type UsersToBooksBookIdFilters = {
  OR?: InputMaybe<Array<UsersToBooksBookIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersToBooksBookIdfiltersOr = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersToBooksBookRelation = {
  author: Scalars['String']['output'];
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  /** Date */
  deletionDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isbn: Scalars['String']['output'];
  plot?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type UsersToBooksBookRelationFilters = {
  OR?: InputMaybe<Array<UsersToBooksBookRelationFiltersOr>>;
  author?: InputMaybe<BookAuthorFilters>;
  creationDate?: InputMaybe<BookCreationDateFilters>;
  deletionDate?: InputMaybe<BookDeletionDateFilters>;
  id?: InputMaybe<BookIdFilters>;
  isbn?: InputMaybe<BookIsbnFilters>;
  plot?: InputMaybe<BookPlotFilters>;
  title?: InputMaybe<BookTitleFilters>;
};

export type UsersToBooksBookRelationFiltersOr = {
  author?: InputMaybe<BookAuthorFilters>;
  creationDate?: InputMaybe<BookCreationDateFilters>;
  deletionDate?: InputMaybe<BookDeletionDateFilters>;
  id?: InputMaybe<BookIdFilters>;
  isbn?: InputMaybe<BookIsbnFilters>;
  plot?: InputMaybe<BookPlotFilters>;
  title?: InputMaybe<BookTitleFilters>;
};

export type UsersToBooksCreationDateFilters = {
  OR?: InputMaybe<Array<UsersToBooksCreationDatefiltersOr>>;
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersToBooksCreationDatefiltersOr = {
  /** Date */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Date */
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<Date> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersToBooksFilters = {
  OR?: InputMaybe<Array<UsersToBooksFiltersOr>>;
  bookId?: InputMaybe<UsersToBooksBookIdFilters>;
  creationDate?: InputMaybe<UsersToBooksCreationDateFilters>;
  userId?: InputMaybe<UsersToBooksUserIdFilters>;
};

export type UsersToBooksFiltersOr = {
  bookId?: InputMaybe<UsersToBooksBookIdFilters>;
  creationDate?: InputMaybe<UsersToBooksCreationDateFilters>;
  userId?: InputMaybe<UsersToBooksUserIdFilters>;
};

export type UsersToBooksInsertInput = {
  bookId?: InputMaybe<Scalars['Float']['input']>;
  /** Date */
  creationDate?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Float']['input']>;
};

export type UsersToBooksItem = {
  bookId?: Maybe<Scalars['Float']['output']>;
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type UsersToBooksOrderBy = {
  bookId?: InputMaybe<InnerOrder>;
  creationDate?: InputMaybe<InnerOrder>;
  userId?: InputMaybe<InnerOrder>;
};

export type UsersToBooksSelectItem = {
  book?: Maybe<UsersToBooksBookRelation>;
  bookId?: Maybe<Scalars['Float']['output']>;
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersToBooksUserRelation>;
  userId?: Maybe<Scalars['Float']['output']>;
};


export type UsersToBooksSelectItemBookArgs = {
  where?: InputMaybe<UsersToBooksBookRelationFilters>;
};


export type UsersToBooksSelectItemUserArgs = {
  where?: InputMaybe<UsersToBooksUserRelationFilters>;
};

export type UsersToBooksUpdateInput = {
  bookId?: InputMaybe<Scalars['Float']['input']>;
  /** Date */
  creationDate?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Float']['input']>;
};

export type UsersToBooksUserIdFilters = {
  OR?: InputMaybe<Array<UsersToBooksUserIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersToBooksUserIdfiltersOr = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Float']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersToBooksUserRelation = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type UsersToBooksUserRelationFilters = {
  OR?: InputMaybe<Array<UsersToBooksUserRelationFiltersOr>>;
  email?: InputMaybe<UsersEmailFilters>;
  firstName?: InputMaybe<UsersFirstNameFilters>;
  id?: InputMaybe<UsersIdFilters>;
  lastName?: InputMaybe<UsersLastNameFilters>;
};

export type UsersToBooksUserRelationFiltersOr = {
  email?: InputMaybe<UsersEmailFilters>;
  firstName?: InputMaybe<UsersFirstNameFilters>;
  id?: InputMaybe<UsersIdFilters>;
  lastName?: InputMaybe<UsersLastNameFilters>;
};

export type UsersUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UsersUsersToBooksRelation = {
  bookId?: Maybe<Scalars['Float']['output']>;
  /** Date */
  creationDate?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type UsersUsersToBooksRelationFilters = {
  OR?: InputMaybe<Array<UsersUsersToBooksRelationFiltersOr>>;
  bookId?: InputMaybe<UsersToBooksBookIdFilters>;
  creationDate?: InputMaybe<UsersToBooksCreationDateFilters>;
  userId?: InputMaybe<UsersToBooksUserIdFilters>;
};

export type UsersUsersToBooksRelationFiltersOr = {
  bookId?: InputMaybe<UsersToBooksBookIdFilters>;
  creationDate?: InputMaybe<UsersToBooksCreationDateFilters>;
  userId?: InputMaybe<UsersToBooksUserIdFilters>;
};

export type UsersUsersToBooksRelationOrder = {
  bookId?: InputMaybe<InnerOrder>;
  creationDate?: InputMaybe<InnerOrder>;
  userId?: InputMaybe<InnerOrder>;
};

export type BookInsertMutationVariables = Exact<{
  values: BooksInsertInput;
}>;


export type BookInsertMutation = { insertIntoBooksSingle?: { id: number, title: string, author: string, isbn: string, plot?: string | null, creationDate?: string | null, deletionDate?: string | null } | null };

export type SaveBookIntoUserLibraryMutationVariables = Exact<{
  values: UsersToBooksInsertInput;
}>;


export type SaveBookIntoUserLibraryMutation = { insertIntoUsersToBooksSingle?: { bookId?: number | null, creationDate?: string | null, userId?: number | null } | null };

export type ReadingInsertMutationVariables = Exact<{
  values: ReadingsInsertInput;
}>;


export type ReadingInsertMutation = { insertIntoReadingsSingle?: { bookId?: number | null, userId?: number | null, id: number, creationDate?: string | null } | null };

export type RemoveBookFromUserLibraryMutationVariables = Exact<{
  where?: InputMaybe<UsersToBooksFilters>;
}>;


export type RemoveBookFromUserLibraryMutation = { deleteFromUsersToBooks: Array<{ bookId?: number | null, userId?: number | null }> };

export type LibraryQueryVariables = Exact<{
  where?: InputMaybe<UsersToBooksFilters>;
  orderBy?: InputMaybe<UsersToBooksOrderBy>;
}>;


export type LibraryQuery = { userstobooks: Array<{ book?: { author: string, id: number, isbn: string, plot?: string | null, title: string, creationDate?: string | null } | null, user?: { firstName?: string | null, lastName?: string | null } | null }> };

export type BooksQueryVariables = Exact<{
  orderBy?: InputMaybe<BooksOrderBy>;
  where?: InputMaybe<BooksFilters>;
}>;


export type BooksQuery = { books: Array<{ author: string, creationDate?: string | null, title: string, id: number, isbn: string, plot?: string | null }> };

export type ReadingsQueryVariables = Exact<{
  orderBy?: InputMaybe<ReadingsOrderBy>;
  where?: InputMaybe<ReadingsFilters>;
}>;


export type ReadingsQuery = { readings: Array<{ bookId?: number | null, userId?: number | null, creationDate?: string | null }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { users: Array<{ id: number, firstName?: string | null, lastName?: string | null }> };

export type UserQueryVariables = Exact<{
  where?: InputMaybe<UsersFilters>;
}>;


export type UserQuery = { usersSingle?: { firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export const BookInsertDocument = gql`
    mutation BookInsert($values: BooksInsertInput!) {
  insertIntoBooksSingle(values: $values) {
    id
    title
    author
    isbn
    plot
    creationDate
    deletionDate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BookInsertGQL extends Apollo.Mutation<BookInsertMutation, BookInsertMutationVariables> {
    document = BookInsertDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveBookIntoUserLibraryDocument = gql`
    mutation SaveBookIntoUserLibrary($values: UsersToBooksInsertInput!) {
  insertIntoUsersToBooksSingle(values: $values) {
    bookId
    creationDate
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveBookIntoUserLibraryGQL extends Apollo.Mutation<SaveBookIntoUserLibraryMutation, SaveBookIntoUserLibraryMutationVariables> {
    document = SaveBookIntoUserLibraryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReadingInsertDocument = gql`
    mutation ReadingInsert($values: ReadingsInsertInput!) {
  insertIntoReadingsSingle(values: $values) {
    bookId
    userId
    id
    creationDate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReadingInsertGQL extends Apollo.Mutation<ReadingInsertMutation, ReadingInsertMutationVariables> {
    document = ReadingInsertDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveBookFromUserLibraryDocument = gql`
    mutation RemoveBookFromUserLibrary($where: UsersToBooksFilters) {
  deleteFromUsersToBooks(where: $where) {
    bookId
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveBookFromUserLibraryGQL extends Apollo.Mutation<RemoveBookFromUserLibraryMutation, RemoveBookFromUserLibraryMutationVariables> {
    document = RemoveBookFromUserLibraryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LibraryDocument = gql`
    query Library($where: UsersToBooksFilters, $orderBy: UsersToBooksOrderBy) {
  userstobooks(where: $where, orderBy: $orderBy) {
    book {
      author
      id
      isbn
      plot
      title
      creationDate
    }
    user {
      firstName
      lastName
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LibraryGQL extends Apollo.Query<LibraryQuery, LibraryQueryVariables> {
    document = LibraryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BooksDocument = gql`
    query Books($orderBy: BooksOrderBy, $where: BooksFilters) {
  books(orderBy: $orderBy, where: $where) {
    author
    creationDate
    title
    id
    isbn
    plot
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BooksGQL extends Apollo.Query<BooksQuery, BooksQueryVariables> {
    document = BooksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReadingsDocument = gql`
    query Readings($orderBy: ReadingsOrderBy, $where: ReadingsFilters) {
  readings(orderBy: $orderBy, where: $where) {
    bookId
    userId
    creationDate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReadingsGQL extends Apollo.Query<ReadingsQuery, ReadingsQueryVariables> {
    document = ReadingsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UsersDocument = gql`
    query Users {
  users {
    id
    firstName
    lastName
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserDocument = gql`
    query User($where: UsersFilters) {
  usersSingle(where: $where) {
    firstName
    lastName
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserGQL extends Apollo.Query<UserQuery, UserQueryVariables> {
    document = UserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }