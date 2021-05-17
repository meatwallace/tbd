import { Button, Flex, Input } from 'theme-ui';
import { useForm } from 'react-hook-form';
import { useTasks } from '../hooks/useTasks';

type Props = {};

enum Field {
  Title = 'title',
}

type FormData = {
  [Field.Title]: string;
};

const styles = {
  form: {
    marginBottom: 2,
  },
  input: {
    marginRight: 1,
  },
  button: {
    flex: '1 0 auto',
  },
};

export function CreateTaskInput(props: Props) {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const { createTask } = useTasks();

  const onSubmit = (data: FormData) => {
    createTask(data);
    setValue(Field.Title, '');
  };

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)} sx={styles.form}>
      <Input
        placeholder="Task name"
        {...register(Field.Title, { required: true })}
        sx={styles.input}
      />

      <Button type="submit" sx={styles.button}>
        Add task
      </Button>
    </Flex>
  );
}
