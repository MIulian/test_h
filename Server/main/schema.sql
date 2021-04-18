CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255)
);

CREATE TABLE role (
  roleid SERIAL PRIMARY KEY,
  rolename VARCHAR(255) UNIQUE
);

CREATE TABLE public.user_role
(
    asignid SERIAL PRIMARY KEY,
    userid integer,
    roleid integer,
    CONSTRAINT fk_role FOREIGN KEY (roleid)
        REFERENCES public.roles (roleid) MATCH SIMPLE
    CONSTRAINT fk_user FOREIGN KEY (userid)
        REFERENCES public.users (userid) MATCH SIMPLE
)