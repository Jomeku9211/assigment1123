export const getUniqueDesignations = (employees) => {
	const designations = new Map();

	const traverse = (data) => {
		for (const employee of data) {
			if (employee.name) {
				designations.set(employee._id, {
					name: employee.name,
					id: employee._id,
				});
			}
			if (employee.children && employee.children.length > 0) {
				traverse(employee.children);
			}
		}
	};

	traverse(employees);

	return Array.from(designations.values());
};
