# personal_proyect

## ¿Qué cosas puedes hacer? / What can you do?

Este proyecto automatiza la creación de commits en Git con fechas personalizadas para llenar tu calendario de contribuciones de GitHub.

This project automates the creation of Git commits with custom dates to fill your GitHub contribution calendar.

## Funcionalidades / Features

### 1. **markCommit(x, y)**
Crea un commit en una fecha específica basada en semanas (x) y días (y).

Creates a commit on a specific date based on weeks (x) and days (y).

**Parámetros / Parameters:**
- `x`: Número de semanas desde hace un año / Number of weeks from one year ago (0-54)
- `y`: Día de la semana / Day of the week (0-6)

**Ejemplo / Example:**
```javascript
markCommit(10, 3); // Crea un commit 10 semanas + 3 días desde hace un año
```

### 2. **makeCommits(n)**
Crea n commits automáticamente con fechas aleatorias distribuidas a lo largo del último año.

Creates n commits automatically with random dates distributed throughout the last year.

**Parámetros / Parameters:**
- `n`: Número de commits a crear / Number of commits to create

**Ejemplo / Example:**
```javascript
makeCommits(100); // Crea 100 commits con fechas aleatorias
```

## Instalación / Installation

1. Clonar el repositorio / Clone the repository:
```bash
git clone <repository-url>
cd personal_proyect
```

2. Instalar dependencias / Install dependencies:
```bash
npm install
```

## Uso / Usage

Ejecutar el script / Run the script:
```bash
node index.js
```

Por defecto, el script crea 100 commits aleatorios. Puedes modificar este número editando la última línea de `index.js`.

By default, the script creates 100 random commits. You can modify this number by editing the last line of `index.js`.

## Dependencias / Dependencies

- **jsonfile**: Para escribir datos en JSON / For writing JSON data
- **moment**: Para manipular fechas / For date manipulation
- **simple-git**: Para ejecutar comandos Git / For executing Git commands
- **random**: Para generar números aleatorios / For generating random numbers

## Nota Importante / Important Note

⚠️ Este proyecto está diseñado con fines educativos y de demostración. Úsalo responsablemente.

⚠️ This project is designed for educational and demonstration purposes. Use it responsibly.
