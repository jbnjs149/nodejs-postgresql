PGDMP                         {            test    15.3    15.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    test    DATABASE        CREATE DATABASE test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE test;
                postgres    false            �            1259    16406 	   todo_list    TABLE     r   CREATE TABLE public.todo_list (
    task text,
    status text,
    assignee text,
    task_id bigint NOT NULL
);
    DROP TABLE public.todo_list;
       public         heap    postgres    false            �            1259    16423    todo_list_task_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.todo_list_task_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.todo_list_task_id_seq;
       public          postgres    false    214            �           0    0    todo_list_task_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.todo_list_task_id_seq OWNED BY public.todo_list.task_id;
          public          postgres    false    215            e           2604    16424    todo_list task_id    DEFAULT     v   ALTER TABLE ONLY public.todo_list ALTER COLUMN task_id SET DEFAULT nextval('public.todo_list_task_id_seq'::regclass);
 @   ALTER TABLE public.todo_list ALTER COLUMN task_id DROP DEFAULT;
       public          postgres    false    215    214            �          0    16406 	   todo_list 
   TABLE DATA           D   COPY public.todo_list (task, status, assignee, task_id) FROM stdin;
    public          postgres    false    214   �
       �           0    0    todo_list_task_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.todo_list_task_id_seq', 3, true);
          public          postgres    false    215            g           2606    16426    todo_list todo_list_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.todo_list
    ADD CONSTRAINT todo_list_pkey PRIMARY KEY (task_id);
 B   ALTER TABLE ONLY public.todo_list DROP CONSTRAINT todo_list_pkey;
       public            postgres    false    214            �   C   x�+I-.142�L��-�I-IM���O���4�JLIQ�K-W(I,�V(*��/H�Jg�qs��qqq |-$     