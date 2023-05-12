SELECT * FROM hr.employees;

SELECT MAX(salary) FROM hr.employees;

SELECT (MAX(salary) - MIN(salary)) FROM hr.employees;

SELECT job_id, AVG(salary) AS avg_salary FROM hr.employees
GROUP BY job_id
ORDER BY avg_salary DESC;

SELECT SUM(salary) FROM hr.employees;

SELECT 
    ROUND(MAX(salary), 2) AS bigger_salary,
    ROUND(MIN(salary), 2) AS lower_salary,
    ROUND(SUM(salary), 2) AS total_salary,
    ROUND(AVG(salary), 2) AS average_salary
FROM
    hr.employees;

SELECT 
    job_id, COUNT(*) AS QTD
FROM
    hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';


SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id;


SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

SELECT job_id, AVG(salary) AS avg_salary FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY avg_salary DESC;


SELECT 
    department_id,
    COUNT(*) AS qtd_employees,
    AVG(salary) AS avg_salary
FROM
    hr.employees
GROUP BY department_id
HAVING qtd_employees > 10;

SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees 
SET 
    phone_number = REPLACE(phone_number, '515', '777')
WHERE
    phone_number LIKE '515%';
    
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(first_name) >= 8;

SELECT employee_id, first_name, LEFT(hire_date, 4) FROM hr.employees;

SELECT employee_id, first_name, RIGHT(hire_date, 2) FROM hr.employees;

SELECT employee_id, first_name, MID(hire_date, 6, 2) FROM hr.employees;

SELECT UCASE(CONCAT(first_name, ' ', last_name)) FROM hr.employees;

SELECT last_name, hire_date FROM hr.employees
WHERE MONTH(hire_date) = 07
AND YEAR(hire_date) = 1987;

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) FROM hr.employees;

