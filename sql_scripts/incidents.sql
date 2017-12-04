DROP TABLE IF EXISTS incidents;

CREATE TABLE incidents (
    id serial,
    Incident_Date text,
    Ticket varchar(11),
    Short_Description text,
    Long_Description text,
    RCA text,
    ERP varchar(8),
    Type text
);

INSERT INTO incidents (Incident_Date, Ticket, Short_Description, Long_Description, RCA, ERP, Type) VALUES
    ('9/4/17', 'INC13584587', 'Error with Query', 'Something happened and that caused something else to happen', 'value too long', 'races', 'query'),
    ('9/7/17', 'INC13584488', 'OMG a query broke', 'Something happened and that caused something else to happen', 'Someone goofed it', 'pascal', 'query');
