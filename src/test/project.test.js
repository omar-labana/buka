import Project from '../Project'

describe('Project instance members', () => {
    const project = new Project('Project');

    const dummyProject = {
        name: 'Project',
        todos: []
    }

    it('checks the type of created instance', () => {
        expect(typeof project).toBe('object')
    });

    it('checks object structure', () => {
        expect(project).toMatchObject(dummyProject);
    });

    it('checks default value if todos array', () => {
        expect(project.todos).toStrictEqual([])
    });

    it('checks number of instance properties', () => {
        expect(Object.keys(project).length
        ).toBe(Object.keys(dummyProject).length)
    });
});
