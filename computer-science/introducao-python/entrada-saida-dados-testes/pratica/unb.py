import csv

with open("graduacao_unb.csv", encoding="utf-8") as f:
    graduacao_reader = csv.reader(f, delimiter=",", quotechar='"')
    header, *data = graduacao_reader

group_by_department = {}

for row in data:
    department = row[15]

    if department not in group_by_department:
        group_by_department[department] = 0

    group_by_department[department] += 1

with open("department_report.csv", "w", encoding="utf-8") as f:
    writer = csv.writer(f)

    headers = [
        "Departamento",
        "Total de Cursos",
    ]

    writer.writerow(headers)

    for department, grades in group_by_department.items():
        row = [
            department,
            grades,
        ]

        writer.writerow(row)
