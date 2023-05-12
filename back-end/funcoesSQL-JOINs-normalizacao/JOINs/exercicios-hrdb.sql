SELECT
    CONCAT(employee.first_name, " ", employee.last_name) AS employee_name,
    CONCAT(manager.first_name, " ", manager.last_name) AS manager_name
FROM
    hr.employees AS employee
INNER JOIN
    hr.employees AS manager ON employee.manager_id = manager.employee_id
    
WHERE manager.department_id <> employee.department_id;


SELECT
    CONCAT(manager.first_name, " ", manager.last_name) AS manager_name, COUNT(employee.first_name)
FROM
    hr.employees AS employee
INNER JOIN
    hr.employees AS manager ON employee.manager_id = manager.employee_id
GROUP BY manager_name;