DROP TABLE IF EXISTS erps;

CREATE TABLE erps (
    id serial,
    erp_name text,
    date_field date,
    is_failure boolean
);

INSERT INTO erps (erp_name, date_field, is_failure) VALUES
    ('alpha', '12/5/17', TRUE),
    ('altais', '12/5/17', FALSE),
    ('apcis', '12/5/17', TRUE),
    ('bravo', '12/5/17', TRUE),
    ('fusion', '12/5/17', TRUE),
    ('glprod', '12/5/17', TRUE),
    ('get_erp', '12/5/17', TRUE),
    ('ipus', '12/5/17', FALSE),
    ('omega', '12/5/17', TRUE),
    ('ofs', '12/5/17', TRUE),
    ('pascal', '12/5/17', TRUE),
    ('powermax', '12/5/17', TRUE),
    ('races', '12/5/17', TRUE),
    ('zeal', '12/5/17', TRUE);
