--
-- This table store data of the user to test database
--

CREATE TABLE  IF NOT EXISTS users (
                      id INT AUTO_INCREMENT PRIMARY KEY,
                      first_name VARCHAR(50),
                      last_name VARCHAR(50),
                      age INT,
                      email VARCHAR(100) UNIQUE,
                      password VARCHAR(255),
                      created_at DATETIME DEFAULT NOW(),
                      updated_at DATETIME DEFAULT NOW()
);

--
-- Add to sentence to make the tests
--

INSERT INTO users(first_name, last_name, age, email, password)
        VALUES
            ('Diego', 'Villarroel', 33, 'hola@diegocontinta.com', UUID() ),
            ('Gabriel', 'Villarroel', 13, 'alt@diegocontinta.com', UUID() ),
            ('Nadia', 'Gutierrez', 33, 'nadia@diegocontinta.com', UUID() ),
            ('Alejandro', 'Villegas', 13, 'alejandro@test.com', UUID() );