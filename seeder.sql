INSERT INTO "Garages" (id, name, address, phone, city, "postalCode", department, country)
VALUES (gen_random_uuid(), 'Renault Mérignac', '3 Rue Marcel Mouloudji', '0745675437', 'Mérignac', 33700, 'Gironde',
        'France'),
       (gen_random_uuid(), 'Chez Marcus', '62 Avenue Louise Michel', '0645863456', 'Bordeaux', 33000, 'Gironde',
        'France'),
       (gen_random_uuid(), 'Peugeot Gradignan', '15 Avenue des Escargots', '0735697230', 'Gradignan', 33700, 'Gironde',
        'France');

INSERT INTO "VehicleStates" (id, name)
VALUES ('123e4567-e89b-12d3-a456-426655440000', 'Bon état'),
       ('123e4567-e89b-12d3-a456-426655440001', 'Mauvais état'),
       ('123e4567-e89b-12d3-a456-426655440002', 'Endommagé');

INSERT INTO "VehicleAppearances" (id, name)
VALUES ('123e4567-e89b-12d3-a456-426655440010', 'floqué'),
       ('123e4567-e89b-12d3-a456-426655440011', 'pas floqué');

INSERT INTO "Services" (id, name, "postalCode")
VALUES ('123e4567-e89b-12d3-a456-426655440020', 'Service1', 33000);

INSERT INTO "FuelTypes" (id, name)
VALUES ('123e4567-e89b-12d3-a456-426655440030', 'Diesel'),
       ('123e4567-e89b-12d3-a456-426655440031', 'SP95'),
       ('123e4567-e89b-12d3-a456-426655440032', 'SP98');

INSERT INTO "VehicleBrands" (id, name)
VALUES ('123e4567-e89b-12d3-a456-426655440040', 'Peugeot'),
       ('123e4567-e89b-12d3-a456-426655440041', 'Citroën'),
       ('123e4567-e89b-12d3-a456-426655440042', 'HONDA');

INSERT INTO "VehicleCategories" (id, name)
VALUES ('123e4567-e89b-12d3-a456-426655440050', 'Voiture'),
       ('123e4567-e89b-12d3-a456-426655440051', 'Moto'),
       ('123e4567-e89b-12d3-a456-426655440052', 'Camion');

INSERT INTO "VehicleModels" (id, name, "brandId", "categoryId")
VALUES ('123e4567-e89b-12d3-a456-426655440060', '207', '123e4567-e89b-12d3-a456-426655440040', '123e4567-e89b-12d3-a456-426655440050'),
       ('123e4567-e89b-12d3-a456-426655440061', 'Berlingo', '123e4567-e89b-12d3-a456-426655440041', '123e4567-e89b-12d3-a456-426655440051'),
       ('123e4567-e89b-12d3-a456-426655440062', 'NT1100', '123e4567-e89b-12d3-a456-426655440042', '123e4567-e89b-12d3-a456-426655440050');

INSERT INTO "InterventionCategories" (id, name)
VALUES ('123e4567-e89b-12d3-a456-426655440070', 'Réparation'),
       ('123e4567-e89b-12d3-a456-426655440071', 'Entretien'),
       ('123e4567-e89b-12d3-a456-426655440072', 'Carrosserie'),
       ('123e4567-e89b-12d3-a456-426655440073', 'Pneu');

INSERT INTO "Vehicles" (id, "administrativePlate", "numberPlate", color, description, "createdAt", "releasedAt",
                        "assignedDate", "fiscalPower", power, mileage, "vehicleStateId", "appearanceId",
                        "serviceAssignedId", "fuelTypeId", "vehicleModelId")
VALUES (gen_random_uuid(), 'AZERTY', '65AB7O', 'fafafa', 'azertyuiop', '2023-11-03T14:30:00', '2023-11-03T14:30:00',
        '2023-11-03T14:30:00', 1, 2, 234, '123e4567-e89b-12d3-a456-426655440000',
        '123e4567-e89b-12d3-a456-426655440010', '123e4567-e89b-12d3-a456-426655440020',
        '123e4567-e89b-12d3-a456-426655440030', '123e4567-e89b-12d3-a456-426655440060'),
       (gen_random_uuid(), 'QSDFGH', 'FO39PLB', 'ababab', 'qsdfghjklm', '2023-11-03T14:30:00', '2023-11-03T14:30:00',
        '2023-11-03T14:30:00', 1, 2, 234, '123e4567-e89b-12d3-a456-426655440001',
        '123e4567-e89b-12d3-a456-426655440010', '123e4567-e89b-12d3-a456-426655440020',
        '123e4567-e89b-12d3-a456-426655440031', '123e4567-e89b-12d3-a456-426655440061'),
       (gen_random_uuid(), 'WXCVBN', 'MJD59HP', 'dadada', 'wxcvbn', '2023-11-03T14:30:00', '2023-11-03T14:30:00',
        '2023-11-03T14:30:00', 1, 2, 234, '123e4567-e89b-12d3-a456-426655440002',
        '123e4567-e89b-12d3-a456-426655440011', '123e4567-e89b-12d3-a456-426655440020',
        '123e4567-e89b-12d3-a456-426655440032', '123e4567-e89b-12d3-a456-426655440062');