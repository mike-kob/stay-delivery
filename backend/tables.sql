BEGIN;
--
-- Create model Client
--
CREATE TABLE "delivery_client"
(
  "id"          INTEGER      NOT NULL PRIMARY KEY AUTOINCREMENT,
  "phone"       VARCHAR(20)  NOT NULL,
  "address"     VARCHAR(200) NOT NULL,
  "card_number" VARCHAR(30)  NULL,
  "photo"       VARCHAR(500) NULL
);
--
-- Create model Courier
--
CREATE TABLE "delivery_courier"
(
  "id"    INTEGER      NOT NULL PRIMARY KEY AUTOINCREMENT,
  "phone" VARCHAR(13)  NOT NULL,
  "name"  VARCHAR(64)  NOT NULL,
  "photo" VARCHAR(500) NULL
);
--
-- Create model Dish
--
CREATE TABLE "delivery_dish"
(
  "id"          INTEGER      NOT NULL PRIMARY KEY AUTOINCREMENT,
  "name"        VARCHAR(64)  NOT NULL,
  "description" VARCHAR(64)  NULL,
  "weight"      INTEGER      NULL,
  "price"       DECIMAL      NOT NULL,
  "photo"       VARCHAR(500) NULL
);
--
-- Create model Restaurant
--
CREATE TABLE "delivery_restaurant"
(
  "id"          INTEGER      NOT NULL PRIMARY KEY AUTOINCREMENT,
  "name"        VARCHAR(64)  NOT NULL,
  "description" VARCHAR(500) NOT NULL,
  "photo"       VARCHAR(500) NULL
);
--
-- Create model Tag
--
CREATE TABLE "delivery_tag"
(
  "id"   INTEGER     NOT NULL PRIMARY KEY AUTOINCREMENT,
  "name" VARCHAR(64) NOT NULL
);
--
-- Create model Order
--
CREATE TABLE "delivery_order"
(
  "id"         INTEGER     NOT NULL PRIMARY KEY AUTOINCREMENT,
  "notes"      VARCHAR(64) NOT NULL,
  "paid"       bool        NOT NULL,
  "delivered"  bool        NOT NULL,
  "date"       DATETIME    NOT NULL,
  "payment"    bool        NOT NULL,
  "client_id"  INTEGER     NOT NULL REFERENCES "delivery_client" ("id") DEFERRABLE INITIALLY DEFERRED,
  "courier_id" INTEGER     NOT NULL REFERENCES "delivery_courier" ("id") DEFERRABLE INITIALLY DEFERRED
);
--
-- Create model Location
--
CREATE TABLE "delivery_location"
(
  "id"            INTEGER     NOT NULL PRIMARY KEY AUTOINCREMENT,
  "address"       VARCHAR(64) NOT NULL,
  "restaurant_id" INTEGER     NOT NULL REFERENCES "delivery_restaurant" ("id") DEFERRABLE INITIALLY DEFERRED
);
--
-- Create model DishOrder
--
CREATE TABLE "delivery_dishorder"
(
  "id"       INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "amount"   INTEGER NOT NULL,
  "dish_id"  INTEGER NOT NULL REFERENCES "delivery_dish" ("id") DEFERRABLE INITIALLY DEFERRED,
  "order_id" INTEGER NOT NULL REFERENCES "delivery_order" ("id") DEFERRABLE INITIALLY DEFERRED
);
--
-- Add field restaurant to dish
--
CREATE TABLE "delivery_dish"
(
  "id"            INTEGER      NOT NULL PRIMARY KEY AUTOINCREMENT,
  "name"          VARCHAR(64)  NOT NULL,
  "description"   VARCHAR(64)  NULL,
  "weight"        INTEGER      NULL,
  "price"         DECIMAL      NOT NULL,
  "photo"         VARCHAR(500) NULL,
  "restaurant_id" INTEGER      NOT NULL REFERENCES "delivery_restaurant" ("id") DEFERRABLE INITIALLY DEFERRED
);

--
-- Add field tags to dish
--
CREATE TABLE "delivery_dish_tags"
(
  "id"      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "dish_id" INTEGER NOT NULL REFERENCES "delivery_dish" ("id") DEFERRABLE INITIALLY DEFERRED,
  "tag_id"  INTEGER NOT NULL REFERENCES "delivery_tag" ("id") DEFERRABLE INITIALLY DEFERRED
);

CREATE UNIQUE INDEX "delivery_dish_tags_dish_id_tag_id_6d73ac9c_uniq" ON "delivery_dish_tags" ("dish_id", "tag_id");
COMMIT;
