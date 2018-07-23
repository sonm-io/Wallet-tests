create table clients
(
  id serial not null
    constraint clients_pkey
    primary key,
  address varchar(255) not null,
  tx varchar(255) not null,
  status_id integer not null
)
;

create unique index clients_tx_addr_uniq
  on clients (address, tx)
;

create table phones
(
  client_id integer not null
    constraint phones_pkey
    primary key
    constraint phones_clients_fk
    references clients,
  phone varchar(30) not null,
  code varchar(15),
  enter_attempts integer not null,
  send_attempts integer not null,
  last_send integer not null,
  in_blockchain integer not null,
  validated integer default 0
)
;

create unique index phones_client_id_uindex
  on phones (client_id)
;

create table queue
(
  id serial not null
    constraint queue_pkey
    primary key,
  client_id integer not null
    constraint queue_client_fk
    references clients,
  type_id integer not null,
  created integer not null,
  processed integer not null
)
;

create table transactions
(
  client_id integer not null
    constraint transactions_client_id_fk
    references clients,
  queue_id integer not null
    constraint transactions_queue_fk
    references queue,
  transaction_hash varchar(255) not null
    constraint transactions_pkey
    primary key,
  type_id integer not null,
  status_id integer not null,
  created integer not null,
  attempts integer not null,
  last_check integer
)
;

create unique index transactions_type_status_index
  on transactions (client_id, type_id)
;