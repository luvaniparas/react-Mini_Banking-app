PGDMP                         {            railway    13.2    13.9 )    %           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            &           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            '           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            (           1262    17471    railway    DATABASE     [   CREATE DATABASE railway WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE railway;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            )           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    5            ?            1259    17480    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false    5            ?            1259    17522    account_transactions    TABLE     ?  CREATE TABLE public.account_transactions (
    id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    from_account_id uuid,
    to_account_id uuid,
    amount double precision NOT NULL,
    date timestamp with time zone NOT NULL,
    bank_id uuid NOT NULL,
    type character varying(255) NOT NULL
);
 (   DROP TABLE public.account_transactions;
       public         heap    postgres    false    5            ?            1259    17505    accounts    TABLE     W  CREATE TABLE public.accounts (
    id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    account_name character varying(255) NOT NULL,
    bank_id uuid NOT NULL,
    customer_id uuid NOT NULL,
    balance double precision NOT NULL
);
    DROP TABLE public.accounts;
       public         heap    postgres    false    5            ?            1259    17485    banks    TABLE       CREATE TABLE public.banks (
    id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    full_name character varying(255),
    abbreviation character varying(255)
);
    DROP TABLE public.banks;
       public         heap    postgres    false    5            ?            1259    17537    credentials    TABLE       CREATE TABLE public.credentials (
    id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role_name character varying(255) NOT NULL,
    is_active boolean DEFAULT true NOT NULL
);
    DROP TABLE public.credentials;
       public         heap    postgres    false    5            ?            1259    17495 	   customers    TABLE     ?  CREATE TABLE public.customers (
    id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    balance double precision NOT NULL
);
    DROP TABLE public.customers;
       public         heap    postgres    false    5            ?            1259    17545    roles    TABLE     ?   CREATE TABLE public.roles (
    id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    role_name character varying(255) NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false    5            ?            1259    17553    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    "firstName" character varying(255),
    "lastName" character varying(255),
    email character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false    5            ?            1259    17551    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    255    5            *           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    254            s           2604    17556    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    254    255    255                      0    17480    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    247   5                 0    17522    account_transactions 
   TABLE DATA           ?   COPY public.account_transactions (id, created_at, updated_at, deleted_at, from_account_id, to_account_id, amount, date, bank_id, type) FROM stdin;
    public          postgres    false    251   ?5                 0    17505    accounts 
   TABLE DATA           w   COPY public.accounts (id, created_at, updated_at, deleted_at, account_name, bank_id, customer_id, balance) FROM stdin;
    public          postgres    false    250   ?9                 0    17485    banks 
   TABLE DATA           `   COPY public.banks (id, created_at, updated_at, deleted_at, full_name, abbreviation) FROM stdin;
    public          postgres    false    248   	;                 0    17537    credentials 
   TABLE DATA           w   COPY public.credentials (id, created_at, updated_at, deleted_at, username, password, role_name, is_active) FROM stdin;
    public          postgres    false    252   ?;                 0    17495 	   customers 
   TABLE DATA           |   COPY public.customers (id, created_at, updated_at, deleted_at, first_name, last_name, email, password, balance) FROM stdin;
    public          postgres    false    249   *@                  0    17545    roles 
   TABLE DATA           R   COPY public.roles (id, created_at, updated_at, deleted_at, role_name) FROM stdin;
    public          postgres    false    253   ?D       "          0    17553    users 
   TABLE DATA           [   COPY public.users (id, "firstName", "lastName", email, created_at, updated_at) FROM stdin;
    public          postgres    false    255   ?D       +           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    254            u           2606    17484     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    247            ?           2606    17526 .   account_transactions account_transactions_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.account_transactions
    ADD CONSTRAINT account_transactions_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.account_transactions DROP CONSTRAINT account_transactions_pkey;
       public            postgres    false    251                       2606    17511 4   accounts accounts_bank_id_customer_id_deleted_at_key 
   CONSTRAINT     ?   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_bank_id_customer_id_deleted_at_key UNIQUE (bank_id, customer_id, deleted_at);
 ^   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_bank_id_customer_id_deleted_at_key;
       public            postgres    false    250    250    250            ?           2606    17509    accounts accounts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public            postgres    false    250            w           2606    17494 '   banks banks_deleted_at_abbreviation_key 
   CONSTRAINT     v   ALTER TABLE ONLY public.banks
    ADD CONSTRAINT banks_deleted_at_abbreviation_key UNIQUE (deleted_at, abbreviation);
 Q   ALTER TABLE ONLY public.banks DROP CONSTRAINT banks_deleted_at_abbreviation_key;
       public            postgres    false    248    248            y           2606    17492    banks banks_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.banks
    ADD CONSTRAINT banks_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.banks DROP CONSTRAINT banks_pkey;
       public            postgres    false    248            ?           2606    17544    credentials credentials_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.credentials
    ADD CONSTRAINT credentials_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.credentials DROP CONSTRAINT credentials_pkey;
       public            postgres    false    252            {           2606    17504 1   customers customers_email_password_deleted_at_key 
   CONSTRAINT     ?   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_email_password_deleted_at_key UNIQUE (email, password, deleted_at);
 [   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_email_password_deleted_at_key;
       public            postgres    false    249    249    249            }           2606    17502    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    249            ?           2606    17549    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    253            ?           2606    17561    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    255            ?           2606    17527 >   account_transactions account_transactions_from_account_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.account_transactions
    ADD CONSTRAINT account_transactions_from_account_id_fkey FOREIGN KEY (from_account_id) REFERENCES public.accounts(id) ON UPDATE CASCADE ON DELETE CASCADE;
 h   ALTER TABLE ONLY public.account_transactions DROP CONSTRAINT account_transactions_from_account_id_fkey;
       public          postgres    false    3201    250    251            ?           2606    17532 <   account_transactions account_transactions_to_account_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.account_transactions
    ADD CONSTRAINT account_transactions_to_account_id_fkey FOREIGN KEY (to_account_id) REFERENCES public.accounts(id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public.account_transactions DROP CONSTRAINT account_transactions_to_account_id_fkey;
       public          postgres    false    3201    250    251            ?           2606    17512    accounts accounts_bank_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_bank_id_fkey FOREIGN KEY (bank_id) REFERENCES public.banks(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_bank_id_fkey;
       public          postgres    false    250    248    3193            ?           2606    17517 "   accounts accounts_customer_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_customer_id_fkey;
       public          postgres    false    250    249    3197               ?   x?]?K? ?=w!??'?]?q?EZ???REJ????5????EKZ?????Z?UЙ???H]?-?\ĪQ??\??M`E07T@?©?k{N??
?٦%???α^?@3P?1L1!X`??d??˱iv???\??w?}B?X?S?         9  x?͗=?7?k߯pPER"?N?6?}"?$??ñs{{?c?? n?Z?z??*ֵb??U81??l`?4e&?Cޥ?b??c?$????S?_3}??]4˰??????}F&h=?v=? ?6OQ;?b???(ԡ?LCr?%?w???~??㧧ik?'𪮩??ȐFk????s?ttky?戝?a?_?~?m?Y?~??J?%Ba?
??	r/6ehk?/b?>??%jЌ???M'???S,x:B?Ij??3??O?䀉H?s???^P/?B*?'ڙ?5FϞX?_?|?b9????f??<??aQ]c???m?/k>@?5=??Сh??P??аraqG#7???wͩw???s	????-??5?uj]K?i??3?"H?"????NM҅]??????\??J??/?!?gC???@h? ???9?*T?RtI?N?nMoh._<?`??c$i]?AFܒ??Ӳ"t\y?2?+$o?\??????,?e???A??#u???4M??2:n8?????"Us???O????Jh?,?Z??=???{?|5m̏?<?a??5̍????%?B???J?z\Krm??:^?????????+?{ӷf??S????_Yd*??7?F	?M?9?0-?$wbٻY0??[?ۈܓ?󃾓)Ņ@?pvu????H?%???R?Ȗ}D?Lo"?<Q???6v?y?F???i?7?چod\bL?/?>?b??f?v@tkz?{? '??g"?V&?m???Ti?\??&wi=??>ϭ7????F?.T??3?ec??+&???-/?Q?,nEF???j|?|X ݚ????Y˷?rb?]?GJ6?*D?s۩??????????Q ???W???2ltr!???h????Y&??M?"ߪ??Yd#3????t&w??QLA??c?F9???E??0???????
R½Xޞ??~ ݚ?????ȟ{^????9???[?Q|L?@?#A?3??`^?????W?{?W?3D|?)?b???q.?4/?v?@?u+z??2]Tu??d??xSۗ???]KM?>W\K?|>???S????ׁ_13?Zy?QpQ> ???????c??Cxzz???dW         ?   x?]?9n?@c?̍!??c??@??	2?@???Î???n??9?A?%?????n??V?F@ƍ? =4????щ4?;?????<??_۳?6?????ZH?u?VA?8?z?40:/??eV???7ȃ??,?Ѐ\BF\Ѥ#??ǌVU(?Ԏa??*???|??????oD?4?]?~??~????vm?n??s??"0T怖2x?F*-???k(&. ??չ`??I?=6??$SZ/????ժ\?         ?   x?}ϽjA???)?7:?+i???1?!?ƭ??c??{r\ .|D???|???DЙ
p? ??h??x?????#@G?{v{?ɪ???????x?sz??d?g?Dm^r+???Yj?R6yb?m??Z??????????ȶ?????=Dm??O()?$??&v?ɽ????in+7>?x{?[.?Os??1??N?         A  x????rIEc?+?oa?@7?HU?7??	?e?6-?(???pEjf(???N???׽?YQh	z?
?c???$????]p!??'?w?;?S$?˹?m}?????????????9է??????r_ؗ??a?0 )'??bu?e?%û???	)m??-????_zx8X??O??ϯǗ?C6?pͭ8? ??
(S?$???;??7?]??e??v????˳~??/??Y??a??ւ?Ap?F^J?5???'?v?w???a?????K???O??<|?D?Ku????k??87?????1xd?]R?Pd
>}?e??P??<,偭j?P??????mK?;g?β	`??s WxX?m????\c?ֆI 7N? tG??u?qM89??A?7??>??x???K:?<嵀t?????X)t????щ????????&?t??.?o^?&?R????7?Р?V3u???#SNn?%]???u!?o?K??]?_?%k?Z??"$?:kƚ?^?c??V??d??F??????=?y^?$不?A?,) ?f{%??l?mh????1:L^???Tޓ?Œ?Q????bJ?)e??jKU{???"?]?i?b?E?|)wۿ????f??jj??YdVm??{?T????-??6/q7?&s?3??????lku?XbǙ-?9[jNZGs8}???????hw???;<?wt?m??an?L??lM?t?`?NNb???=ϸL?F??A???|=???-Ǖ?t?R?Ƭ???????zd???<?w?E???3???Q??.u??`??`??@FL???@??2?qߘr?.??#?1m6\????n???&5??X?`???-?k0?ўS?ݾ?X kvŮ	?Y?ӫ???0$ۤG???k?6??=!?8</nm?k[MV?|X??B?\???%???5-^?,;?gpp7???7???^|q??T?????2trAJ??NV?2?a??n?醔?ny5?s_O??<#1??X?(d>5<?XkO?I_z?|%??A^?ڛ?vd:sq{[<??	m?+?H?E$dS??I??H?	?@?~{h?Ӆ4E??{?a???????˻???K??????_ěʪ         t  x??V?n#7=??"??\?K?????\??H3?ذ? ??)?ƒ??ؒH?|?<>2E?S??Lt?C??͊??΅?&??e??ߴZT\??јߕ?7?˟??x??t?5y:??y?/?O ?R?D????
??B
D???,kκ2?`\?????!l 	????4=??k ?e$??)?l??0??7?*??9???I??-=(??7?<O_???????O1???"C ?&??*xJI?P??a$?Ÿ?<j???????????ez???H??*??gI??-%65???=?9h?0?+$??d?9??5?u?vr??i?
?.M??J?3
щ?p?^ߓo?.?o?k????,?i??ّq?%[a?1???́???VD????
	????????u?$??|]=w_S?>F0?5`?b?1??|j\iT?P8;?????wzI??k?}??GeYĶ?;I??4@E???Fm??be?06RP???Eq?pS??;9Z??L?b??> y̐??\kM%??A/??DwZ?N^????<?Я?~M?F?(1?	H???t_9l?????W??׫??b?L????{}????J^???Σ~[??$?(?ȶ)*#ސ?Q򜽵#? m????^?r??.S???q<S
0;?ݨ????id[Ss???-$????I#l^\?ʝ????4??zE6?QyبZQ???????????~Y???????t??n??$?*'i1K??*??c?Ւ??d?EGa?`?.v????S?7~&WZn?[?tMV,]sjփ?r??5?Y?ؿgx???O?c?"g91qp?Ӆ?[???<????1????n?U????#r
*?;!?dW?Qźjh?Z,f???????????k? 	e?7?U<t???|??S)7i?.?"?E?
??V?SF?R?q%",?4?m?(ݟ*??c?#(??i??5?? ??ŻC???)????FTt??????MEs??._?zVx???B??C+?v??]???[?j_??T?????I?^??B?^O???_2?I??YB`%???!b:?,?h?i??W<s}?fr?8??C???MR
???8P9h?m??E???UX?[???qCb2?????^ت??]?O?t8{y:LѠ?}?w???H??u             x?????? ? ?      "      x?????? ? ?     