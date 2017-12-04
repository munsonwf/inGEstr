DROP TABLE IF EXISTS reports;

CREATE TABLE reports (
    id serial,
    report_date text,
    completion_time text,
    queries_failed integer,
    success boolean,
    comments text
);

INSERT INTO reports (report_date, completion_time, queries_failed, success, comments) VALUES
    ('2017-10-17', '9:15 AM', 4, FALSE, 'Everything broken'),
    ('2017-10-18', '8:45 AM', 4, TRUE, 'Not too bad'),
    ('2017-10-19', '8:30 AM', 4, FAlSE, 'I cant even');
