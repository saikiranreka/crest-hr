#!/usr/bin/with-contenv /bin/sh

# Replacing the management interface with 127.0.0.1 below


bind_address=$(cat ${WILDFLY_BIND_ADDRESS})

echo "bind_address is set to ${bind_address}"

exec s6-setuidgid ${WILDFLY_USER} ${WILDFLY_HOME}/bin/standalone.sh \
     -b $bind_address \
     -bmanagement 0.0.0.0 \
     -Djboss.as.management.blocking.timeout=600 \
     "$@"
