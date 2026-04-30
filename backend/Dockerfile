FROM maven:3.9.6-eclipse-temurin-17-alpine AS build
WORKDIR /workspace/app

# Copy the pom.xml
COPY pom.xml .

# Download dependencies (this step is cached unless pom.xml changes)
RUN mvn dependency:go-offline -B

# Copy the source code
COPY src src

# Package the application
RUN mvn package -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

FROM eclipse-temurin:17-jre-alpine
VOLUME /tmp
ARG DEPENDENCY=/workspace/app/target/dependency

# Copy the dependencies and classes from the build stage
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

# Run the application
ENTRYPOINT ["java","-cp","app:app/lib/*","com.example.backend.BackendApplication"]
