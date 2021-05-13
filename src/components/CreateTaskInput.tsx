import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useTasks } from '../hooks/useTasks';

type Props = {};

enum Field {
  Title = 'title',
}

type FormData = {
  [Field.Title]: string;
};

export function CreateTaskInput(props: Props) {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const { createTask } = useTasks();

  const onSubmit = (data: FormData) => {
    createTask(data);
    setValue(Field.Title, '');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        defaultValue="Example task title"
        {...register(Field.Title, { required: true })}
      />

      <input type="submit" />
    </form>
  );
}
