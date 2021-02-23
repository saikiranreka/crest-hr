FROM soulwing/wildfly10

ARG POSTGRESQL_JDBC_DRIVER=postgresql-42.2.1.jar
ENV WILDFLY_HOME=/apps/wildfly

COPY run-wildfly.sh ${WILDFLY_HOME}/bin/run-wildfly
RUN chmod +x ${WILDFLY_HOME}/bin/run-wildfly

ADD https://jdbc.postgresql.org/download/${POSTGRESQL_JDBC_DRIVER} /apps/artifacts/${POSTGRESQL_JDBC_DRIVER}
COPY config.d/ /etc/wildfly/config.d/
COPY cont-init.d/ /etc/cont-init.d/
COPY standalone.conf ${WILDFLY_HOME}/bin/
RUN chmod -R go+r /apps/artifacts/