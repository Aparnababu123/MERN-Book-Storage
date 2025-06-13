import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBooks = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/api/books/get/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4 '>
      <BackButton />
      <h1 className='text-3xl my-4 '> Book Details</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col mx-auto border border-black-300 rounded-xl w-fit p-6 bg-white shadow-lg space-y-4">
  {[
    { label: 'ID', value: book._id },
    { label: 'Title', value: book.title },
    { label: 'Author', value: book.author },
    { label: 'Publish Year', value: book.publishYear },
    { label: 'Create Time', value: new Date(book.createdAt).toLocaleString() },
    { label: 'Last Update Time', value: new Date(book.updatedAt).toLocaleString() },
  ].map(({ label, value }) => (
    <div key={label} className="flex items-center border border-gray-200 rounded-md px-4 py-3 bg-gray-50 shadow-lg">
      <span className="w-40 text-blue-600 font-semibold">{label}</span>
      <span className="text-black-800">{value}</span>
    </div>
  ))}
</div>

      )}
    </div>
  );
};

export default ShowBooks;
