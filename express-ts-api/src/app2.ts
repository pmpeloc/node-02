import express from 'express';

const app = express();

interface BaseParams<IDType = number> {
  id: IDType;
}

interface DogDetails {
  name: string;
  breed: DogBreed;
  adopted_at: Date | null;
  birth_date: Date | null;
}

interface APIResponse<Data> {
  data: Data;
  message: string;
}

interface Pagination {
  page: number;
  limit: number;
  breed: DogBreed;
}

interface Empty {}

type DogBreed = 'labrador' | 'german shepherd' | 'golden retriever';

type Dog = BaseParams & DogDetails;

app.get<Empty, APIResponse<Dog[]>, Empty, Pagination>(
  '/api/v1/dogs',
  (req, res) => {
    // your implementation
    res.send({
      data: [
        {
          name: 'Rodi',
          breed: 'labrador',
          adopted_at: null,
          birth_date: null,
          id: 1,
        },
      ],
      message: 'All dogs',
    });
  }
);

app.get<BaseParams, APIResponse<Dog | null>, Empty, Empty>(
  '/api/v1/dogs/:id',
  (req, res) => {
    // your implementation
    res.send({
      data: {
        name: 'Misa',
        breed: 'german shepherd',
        adopted_at: null,
        birth_date: null,
        id: 1,
      },
      message: 'One dog',
    });
  }
);

app.post<Empty, APIResponse<Dog>, DogDetails, Empty>(
  '/api/v1/dogs',
  (req, res) => {
    // your implementation
    res.send({
      data: {
        name: 'Misa',
        breed: 'german shepherd',
        adopted_at: null,
        birth_date: null,
        id: 1,
      },
      message: 'Dog created',
    });
  }
);

app.put<BaseParams, APIResponse<Dog>, Partial<DogDetails>, Empty>(
  '/api/v1/dogs',
  (req, res) => {
    // your implementation
    res.send({
      data: {
        name: 'Misael',
        breed: 'german shepherd',
        adopted_at: null,
        birth_date: null,
        id: 1,
      },
      message: 'Dog updated',
    });
  }
);

app.delete<BaseParams, APIResponse<Dog>, Empty, Empty>(
  '/api/v1/dogs',
  (req, res) => {
    // your implementation
    res.send({
      data: {
        name: 'Misa',
        breed: 'german shepherd',
        adopted_at: null,
        birth_date: null,
        id: 1,
      },
      message: 'Dog deleted',
    });
  }
);
