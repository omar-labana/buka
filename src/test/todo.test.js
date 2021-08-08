import Todo from '../Todo';

describe('Todo instance members', () => {
  const task = new Todo('Title', 'Description', '1-1-2020', 'High');

  const dummyObj = {
    title: 'Title',
    description: 'Description',
    dueDate: '1-1-2020',
    priority: 'High',
    isCompleted: false,
  };

  it('checks the type of created instance', () => {
    expect(typeof task).toBe('object');
  });

  it('checks object structure', () => {
    expect(task).toMatchObject(dummyObj);
  });

  it('checks default value if isCompleted', () => {
    expect(task.isCompleted).toBe(false);
  });

  it('checks number of instance properties', () => {
    expect(Object.keys(task).length).toBe(Object.keys(dummyObj).length);
  });
});
