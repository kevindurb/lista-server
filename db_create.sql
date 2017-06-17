--
-- PostgreSQL database dump
--

\connect lista

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: lists; Type: TABLE; Schema: public; Owner: lista_user
--

CREATE TABLE lists (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    owner_id uuid NOT NULL,
    name text
);


ALTER TABLE lists OWNER TO lista_user;

--
-- Name: users; Type: TABLE; Schema: public; Owner: lista_user
--

CREATE TABLE users (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    username text NOT NULL,
    password_digest text NOT NULL,
    first_name text,
    last_name text,
    created_at date DEFAULT now(),
    updated_at date DEFAULT now()
);


ALTER TABLE users OWNER TO lista_user;

--
-- Name: lists lists_pkey; Type: CONSTRAINT; Schema: public; Owner: lista_user
--

ALTER TABLE ONLY lists
    ADD CONSTRAINT lists_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: lista_user
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: lista_user
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

