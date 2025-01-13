-- schema.sql
CREATE TABLE turf (
                      id BIGINT AUTO_INCREMENT PRIMARY KEY,
                      name VARCHAR(255) NOT NULL,
                      description VARCHAR(255),
                      price_per_square_meter FLOAT
);
-- Tabelle für Customer Order
CREATE TABLE customer_order (
                                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                name VARCHAR(255) NOT NULL,
                                address VARCHAR(255) NOT NULL,
                                zipcode VARCHAR(10) NOT NULL,
                                city VARCHAR(255) NOT NULL,
                                total_price FLOAT NOT NULL
);
CREATE TABLE cart_item (
                           id BIGINT AUTO_INCREMENT PRIMARY KEY,
                           order_id BIGINT NOT NULL,
                           square_meter FLOAT NOT NULL,
                           turf_id BIGINT NOT NULL,
                           FOREIGN KEY (turf_id) REFERENCES turf(id)
);