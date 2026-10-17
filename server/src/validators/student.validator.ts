export function validateStudent(name: unknown, age: unknown): string | null {
    if (typeof name !== "string" || name.trim() === "") {
        return "Student name is required";
    }

    if (typeof age !== "number" || age < 1 || age > 120) {
        return "Age must be a valid number";
    }

    return null;
}
