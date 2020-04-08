sidebarNodes={"extras":[{"group":"Architecture, Design and Concepts","headers":[],"id":"001-intro_architecture","title":"Introduction"},{"group":"Architecture, Design and Concepts","headers":[{"anchor":"declarative-vs-explicit-data-management","id":"Declarative vs. Explicit Data Management"},{"anchor":"amqp-as-internal-api-mechanism","id":"AMQP as internal API mechanism"},{"anchor":"device-id","id":"Device ID"},{"anchor":"device-interaction","id":"Device interaction"},{"anchor":"realms-and-multitenancy","id":"Realms and multitenancy"},{"anchor":"message-ordering","id":"Message Ordering"},{"anchor":"triggers","id":"Triggers"}],"id":"010-design_principles","title":"Design Principles"},{"group":"Architecture, Design and Concepts","headers":[{"anchor":"pairing","id":"Pairing"},{"anchor":"data-updater-plant-dup","id":"Data Updater Plant (DUP)"},{"anchor":"trigger-engine","id":"Trigger Engine"},{"anchor":"appengine","id":"AppEngine"},{"anchor":"realm-management","id":"Realm Management"},{"anchor":"housekeeping","id":"Housekeeping"}],"id":"020-components","title":"Components"},{"group":"Architecture, Design and Concepts","headers":[{"anchor":"versioning","id":"Versioning"},{"anchor":"format","id":"Format"},{"anchor":"interface-type","id":"Interface Type"},{"anchor":"ownership","id":"Ownership"},{"anchor":"mappings","id":"Mappings"},{"anchor":"aggregation","id":"Aggregation"},{"anchor":"datastream-specific-features","id":"Datastream-specific features"},{"anchor":"best-practices","id":"Best practices"}],"id":"030-interface","title":"Interfaces"},{"group":"Architecture, Design and Concepts","headers":[{"anchor":"interface","id":"Interface"},{"anchor":"mapping","id":"Mapping"}],"id":"040-interface_schema","title":"Interface Schema"},{"group":"Architecture, Design and Concepts","headers":[{"anchor":"authentication-flow","id":"Authentication flow"},{"anchor":"credentials-secret-vs-transport-credentials","id":"Credentials Secret vs. Transport Credentials"},{"anchor":"using-ssl-certificates-as-transport-credentials","id":"Using SSL Certificates as Transport Credentials"},{"anchor":"agents","id":"Agents"},{"anchor":"transport-responsibility","id":"Transport responsibility"},{"anchor":"pairing-facilities","id":"Pairing facilities"}],"id":"050-pairing_mechanism","title":"Pairing Mechanism"},{"group":"Architecture, Design and Concepts","headers":[{"anchor":"format","id":"Format"},{"anchor":"conditions","id":"Conditions"},{"anchor":"actions","id":"Actions"},{"anchor":"relationship-with-channels","id":"Relationship with Channels"}],"id":"060-triggers","title":"Triggers"},{"group":"Architecture, Design and Concepts","headers":[],"id":"065-groups","title":"Groups"},{"group":"Architecture, Design and Concepts","headers":[{"anchor":"authentication-realms","id":"Authentication Realms"},{"anchor":"authentication-in-astarte","id":"Authentication in Astarte"},{"anchor":"authorization","id":"Authorization"},{"anchor":"authorization-for-rest-apis","id":"Authorization for REST APIs"},{"anchor":"authorization-for-channels","id":"Authorization for Channels"},{"anchor":"supported-integrations","id":"Supported integrations"},{"anchor":"best-practices","id":"Best practices"}],"id":"070-auth","title":"Authentication and Authorization"},{"group":"Architecture, Design and Concepts","headers":[{"anchor":"mqtt-topics-overview","id":"MQTT Topics Overview"},{"anchor":"bson","id":"BSON"},{"anchor":"connection-and-disconnection","id":"Connection and Disconnection"},{"anchor":"introspection","id":"Introspection"},{"anchor":"empty-cache","id":"Empty Cache"},{"anchor":"session-present","id":"Session Present"},{"anchor":"purge-properties","id":"Purge Properties"},{"anchor":"publishing-data","id":"Publishing Data"},{"anchor":"minimal-protocol","id":"Minimal Protocol"},{"anchor":"error-handling","id":"Error Handling"},{"anchor":"authentication","id":"Authentication"},{"anchor":"authorization","id":"Authorization"},{"anchor":"connecting-to-the-broker","id":"Connecting to the Broker"}],"id":"080-mqtt-v1-protocol","title":"Astarte MQTT v1 Protocol"},{"group":"Architecture, Design and Concepts","headers":[{"anchor":"schema-and-keyspace-creation","id":"Schema and Keyspace Creation"},{"anchor":"tables","id":"Tables"},{"anchor":"schema-changes","id":"Schema changes"}],"id":"090-database","title":"Astarte Database"},{"group":"User Guide","headers":[],"id":"001-intro_user","title":"Introduction"},{"group":"User Guide","headers":[{"anchor":"interacting-with-a-device","id":"Interacting with a Device"},{"anchor":"interacting-as-a-user","id":"Interacting as a User"}],"id":"010-interacting_with_astarte","title":"Interacting with Astarte"},{"group":"User Guide","headers":[],"id":"020-accessing_and_exploring_a_realm","title":"Accessing and Exploring a Realm"},{"group":"User Guide","headers":[{"anchor":"rationale","id":"Rationale"},{"anchor":"interface-atomicity","id":"Interface Atomicity"}],"id":"029-interface_design_guide","title":"Interface Design Guide"},{"group":"User Guide","headers":[{"anchor":"querying-interfaces","id":"Querying Interfaces"},{"anchor":"installing-updating-an-interface","id":"Installing/Updating an interface"},{"anchor":"interfaces-lifecycle","id":"Interfaces lifecycle"},{"anchor":"realm-vs-device-interface-relationship","id":"Realm vs. Device Interface relationship"},{"anchor":"caveats","id":"Caveats"},{"anchor":"dangling-data","id":"Dangling data"}],"id":"030-manage_interfaces","title":"Managing Interfaces"},{"group":"User Guide","headers":[{"anchor":"registration-agent","id":"Registration Agent"},{"anchor":"credentials-secret-lifecycle","id":"Credentials Secret Lifecycle"},{"anchor":"unregistering-a-device","id":"Unregistering a device"}],"id":"035-register_device","title":"Registering a Device"},{"group":"User Guide","headers":[{"anchor":"credentials-secret-pairing-and-transports","id":"Credentials Secret, Pairing and Transports"},{"anchor":"using-astarte-mqtt-through-astarte-sdk","id":"Using Astarte/MQTT through Astarte SDK"}],"id":"040-connect_device","title":"Connecting a Device"},{"group":"User Guide","headers":[{"anchor":"using-appengine-api","id":"Using AppEngine API"},{"anchor":"navigating-and-retrieving-datastream-results","id":"Navigating and retrieving Datastream results"}],"id":"050-query_device","title":"Querying a Device"},{"group":"User Guide","headers":[{"anchor":"rooms","id":"Rooms"},{"anchor":"managing-transient-triggers","id":"Managing Transient Triggers"},{"anchor":"authorization","id":"Authorization"}],"id":"052-using_channels","title":"Using Astarte Channels"},{"group":"User Guide","headers":[{"anchor":"connection-trigger","id":"Connection Trigger"},{"anchor":"data-trigger","id":"Data Trigger"}],"id":"060-using_triggers","title":"Using Triggers"},{"group":"User Guide","headers":[{"anchor":"creating-a-group","id":"Creating a group"},{"anchor":"adding-or-removing-a-device-to-from-a-group","id":"Adding or removing a device to/from a group"},{"anchor":"accessing-devices-in-a-group-with-astarte-appengine-api","id":"Accessing Devices in a group with Astarte AppEngine API"}],"id":"065-managing-groups","title":"Managing Groups"},{"group":"User Guide","headers":[],"id":"070-connect_application","title":"Connect 3rd party applications"},{"group":"User Guide","headers":[],"id":"080-grafana_datasource","title":"Using Astarte&#39;s Grafana Datasource"},{"group":"User Guide","headers":[{"anchor":"devices","id":"Devices"},{"anchor":"triggers","id":"Triggers"}],"id":"090-troubleshooting","title":"Troubleshooting"},{"group":"Administrator Guide","headers":[],"id":"001-intro_administrator","title":"Introduction"},{"group":"Administrator Guide","headers":[{"anchor":"kubernetes-requirements","id":"Kubernetes Requirements"},{"anchor":"resource-requirements","id":"Resource Requirements"}],"id":"010-system_requirements","title":"System Requirements"},{"group":"Administrator Guide","headers":[{"anchor":"on-your-machine","id":"On your machine"},{"anchor":"voyager","id":"Voyager"},{"anchor":"external-cassandra","id":"External Cassandra"},{"anchor":"kubernetes-and-external-components","id":"Kubernetes and external components"}],"id":"020-prerequisites","title":"Prerequisites"},{"group":"Administrator Guide","headers":[{"anchor":"installation","id":"Installation"},{"anchor":"upgrading-the-operator","id":"Upgrading the Operator"},{"anchor":"uninstalling-the-operator","id":"Uninstalling the Operator"}],"id":"030-installation_kubernetes","title":"Installing Astarte Operator"},{"group":"Administrator Guide","headers":[{"anchor":"clone-the-operator-repository","id":"Clone the Operator Repository"},{"anchor":"install-rbacs-and-crds","id":"Install RBACs and CRDs"},{"anchor":"running-the-operator-inside-the-cluster","id":"Running the Operator inside the Cluster"},{"anchor":"running-the-operator-outside-the-cluster","id":"Running the Operator outside the Cluster"}],"id":"040-manual_kubernetes","title":"Manual Operator Installation"},{"group":"Administrator Guide","headers":[{"anchor":"using-astartectl","id":"Using astartectl"},{"anchor":"astartectl-profiles","id":"astartectl Profiles"},{"anchor":"using-a-standard-astarte-cr","id":"Using a standard Astarte CR"}],"id":"060-setup_cluster","title":"Setting up the Cluster"},{"group":"Administrator Guide","headers":[{"anchor":"creating-an-astartevoyageringress","id":"Creating an AstarteVoyagerIngress"},{"anchor":"ssl-and-certificates","id":"SSL and Certificates"},{"anchor":"api-paths","id":"API Paths"},{"anchor":"further-customization","id":"Further customization"}],"id":"065-setup_ingress","title":"Setting up the Ingress"},{"group":"Administrator Guide","headers":[{"anchor":"accessing-housekeeping-key","id":"Accessing Housekeeping key"},{"anchor":"work-in-progress","id":"Work in progress!"}],"id":"070-manage_realms","title":"Managing Realms"},{"group":"Administrator Guide","headers":[{"anchor":"upgrading-through-astartectl","id":"Upgrading through astartectl"},{"anchor":"upgrading-by-modifying-the-cr","id":"Upgrading by modifying the CR"}],"id":"080-upgrade_guide","title":"Upgrading the Cluster"},{"group":"Tutorials","headers":[{"anchor":"before-you-begin","id":"Before you begin"},{"anchor":"install-astarte","id":"Install Astarte"},{"anchor":"create-a-realm","id":"Create a Realm"},{"anchor":"install-an-interface","id":"Install an interface"},{"anchor":"install-a-trigger","id":"Install a trigger"},{"anchor":"stream-data","id":"Stream data"},{"anchor":"building-stream-qt5-test-from-source","id":"Building stream-qt5-test from source"},{"anchor":"grab-your-tea","id":"Grab your tea"},{"anchor":"cleaning-up","id":"Cleaning up"},{"anchor":"final-notes","id":"Final notes"}],"id":"010-astarte_in_5_minutes","title":"Astarte in 5 minutes"},{"group":"REST API Reference","headers":[],"id":"001-intro_api","title":"Introduction"}],"modules":[],"tasks":[]}