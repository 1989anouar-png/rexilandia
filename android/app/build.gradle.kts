import java.util.Properties

plugins {
    id("com.android.application")
}

val keystoreProperties = Properties()
val keystorePropertiesFile = rootProject.file("keystore.properties")
if (keystorePropertiesFile.exists()) {
    keystorePropertiesFile.inputStream().use { keystoreProperties.load(it) }
}

fun signingValue(name: String): String? {
    val fromEnv = System.getenv(name)
    if (!fromEnv.isNullOrBlank()) return fromEnv
    val fromFile = keystoreProperties.getProperty(name)
    if (!fromFile.isNullOrBlank()) return fromFile
    return null
}

android {
    namespace = "app.rexilandia.juego"
    compileSdk = 36

    defaultConfig {
        applicationId = "app.rexilandia.juego"
        minSdk = 24
        targetSdk = 36
        versionCode = 1
        versionName = "1.0.0"
    }

    signingConfigs {
        create("release") {
            val store = signingValue("REXILANDIA_STORE_FILE")
            if (store != null) {
                storeFile = file(store)
                storePassword = signingValue("REXILANDIA_STORE_PASSWORD")
                keyAlias = signingValue("REXILANDIA_KEY_ALIAS")
                keyPassword = signingValue("REXILANDIA_KEY_PASSWORD")
            }
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            val releaseSigning = signingConfigs.getByName("release")
            if (releaseSigning.storeFile != null) {
                signingConfig = releaseSigning
            }
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    packaging {
        resources {
            excludes += setOf("META-INF/DEPENDENCIES", "META-INF/LICENSE*")
        }
    }
}

dependencies {
    implementation("androidx.appcompat:appcompat:1.7.1")
    implementation("androidx.webkit:webkit:1.14.0")
    implementation("androidx.activity:activity:1.10.1")
}

val buildWeb =
    tasks.register<Exec>("buildWeb") {
        group = "build"
        description = "Empaqueta la web actual de Rexilandia dentro de los assets."
        workingDir = rootProject.projectDir.parentFile
        commandLine("npm", "run", "build:android")
    }

tasks.named("preBuild").configure {
    dependsOn(buildWeb)
}
