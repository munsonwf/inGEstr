DROP TABLE IF EXISTS erps;

CREATE TABLE erps (
    id serial,
    erp_name text,
    date_field date,
    is_failure boolean
);

INSERT INTO erps (erp_name, date_field, is_failure) VALUES
    ('alpha', '12/8/17', TRUE),
    ('altais', '12/8/17', FALSE),
    ('apcis', '12/8/17', TRUE),
    ('bravo', '12/8/17', FALSE),
    ('fusion', '12/8/17', TRUE),
    ('glprod', '12/8/17', TRUE),
    ('get_erp', '12/8/17', TRUE),
    ('ipus', '12/8/17', FALSE),
    ('omega', '12/8/17', FALSE),
    ('ofs', '12/8/17', TRUE),
    ('pascal', '12/8/17', FALSE),
    ('powermax', '12/8/17', FALSE),
    ('races', '12/8/17', FALSE),
    ('zeal', '12/8/17', TRUE);
